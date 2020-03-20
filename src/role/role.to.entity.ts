import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  BeforeInsert,
  OneToMany,
  ManyToMany,
  JoinTable,
} from 'typeorm';

import { PermissionToEntity } from '../permission/permission.to.entity';


@Entity('roles')
export class RoleToEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @CreateDateColumn()
  created: Date;

  @Column({
    type: 'text',
    unique: true,
  })
  role: string;

  @OneToMany(type => PermissionToEntity, permission => permission.role, { cascade: true })
  permissions: PermissionToEntity[];


}
