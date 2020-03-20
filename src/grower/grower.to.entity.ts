import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  BeforeInsert,
  OneToMany,
  ManyToMany,
  JoinTable, OneToOne,
} from 'typeorm';

import { GrowerDTO } from './grower.dto';
import {GrowerRO} from "./grower.dto";

@Entity('growers')
export class GrowerEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @CreateDateColumn()
  created: Date;

  @Column({
    type: 'text',
    unique: true,
  })
  company: string;

  @Column('text')
  address: string;


  @Column('text')
  city: string;

  @Column('text')
  state: string;

  @Column('text')
  zip: string;

  @Column('text')
  contact: string;

  @Column('text')
  phone: string;

  @Column('boolean')
  inactive: string;

  toResponseObject(): GrowerRO {
    const { id, created, company, address, city } = this;
    const responseObject: GrowerRO = {
      id,
      created,
      company,
      address,
      city
    };

    return responseObject;
  }

}
