import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Like } from 'typeorm';

import {GrowerDTO, GrowerRO} from "./grower.dto";
import {GrowerEntity} from "./grower.to.entity";

@Injectable()
export class GrowerService {
  constructor(@InjectRepository(GrowerEntity)private repository: Repository<GrowerEntity>) {}

  private toResponseObject(grower: GrowerEntity): GrowerRO {
    const responseObject: any = {
      ...grower,
    };
    return responseObject;
  }

  async register(data: GrowerDTO) {
    const { company } = data;
    let grower = await this.repository.findOne({ where: { company } });
    if (grower) {
      throw new HttpException('User already exists', HttpStatus.BAD_REQUEST);
    }
    grower = await this.repository.create(data);
    await this.repository.save(grower);
    return grower.toResponseObject();
  }

  async getAll(data:any): Promise<GrowerRO[]> {
    const {sortName, sortDir, filter} = data
    console.log("data1", sortName)
    const page=1;
    let query={
      take: 25,
      skip: 25 * (page - 1)
    };

    if(filter){
      query['where']= [{company:Like(`%${filter}%`)},
        {address:Like(`%${filter}%`)},
        {city:Like(`%${filter}%`)},
        {state:Like(`%${filter}%`)},
      ]
    }

    if(sortName && sortDir) {
      query['order']=  {
          [sortName]: sortDir
      }
    }
    const growers = await this.repository.find(query);
    return growers.map(grower => this.toResponseObject(grower));
  }


}
