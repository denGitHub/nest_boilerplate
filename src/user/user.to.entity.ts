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
import * as bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';

import { RoleToEntity } from '../role/role.to.entity';
//import { UserRO } from './user.dto';
import {UserRO} from './dto/UserRO';
import {UserDto} from "./dto/UserDto";
import {TokenPayloadDto} from "./dto/TokenPayloadDto";

@Entity('users')
export class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @CreateDateColumn()
  created: Date;

  @Column({
    type: 'text',
    unique: true,
  })
  username: string;

  @Column({ nullable: true })
  avatar: string;

  @Column({ unique: true, nullable: false })
  email: string;

  @Column('text')
  password: string;


  @BeforeInsert()
  async hashPassword() {
    this.password = await bcrypt.hash(this.password, 10);
  }

  async comparePassword(attempt: string): Promise<boolean> {
    return await bcrypt.compare(attempt, this.password);
  }

  toResponseObject(showToken: boolean = true): UserDto {
    const { id, created, username, email, token} = this;
    const responseObject: UserDto = {id,username,email,created};
    return responseObject;
  }


  toResponseDTObject(showToken: boolean = true): UserRO {
    const { id, created, username, email, token, user } = this;
    const responseObject: UserRO = {token,user};
    const userDto:UserDto={id,created,email,username}
    responseObject.user= userDto;
    responseObject.token=token;
    return responseObject;
  }


  private get user(): Object {
    return this;
  }

  private get token(): TokenPayloadDto {
    const { id, username } = this;

    return new TokenPayloadDto({
      expiresIn: 7,
      accessToken: jwt.sign({id,username,},process.env.SECRET,{ expiresIn: '7d' })
  });
  }
}
