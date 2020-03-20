import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  BeforeInsert,
  OneToMany,
  ManyToMany,
  ManyToOne,
  JoinTable,
} from 'typeorm';
import * as bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';

import { UserRO } from './permission.dto';
import { RoleToEntity } from '../role/role.to.entity';

@Entity('permissions')
export class PermissionToEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @CreateDateColumn()
  created: Date;

  @Column({
    type: 'text',
    unique: true,
  })
  permission: string;

  @Column({
    type: 'text',
    unique: true,
  })
  description: string;


  @ManyToOne(type => RoleToEntity, role => role.permissions)
  role: RoleToEntity;

}
