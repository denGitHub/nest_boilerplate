'use strict';

import {
  IsString,
  IsEmail,
  MinLength,
  IsNotEmpty,
} from 'class-validator';
import {ApiProperty} from '@nestjs/swagger';
import {Column} from 'typeorm';

export class UserDto {
  @ApiProperty()
  readonly id: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly username: string;

  @IsString()
  @IsEmail()
  @IsNotEmpty()
  @ApiProperty()
  readonly email: string;


  @ApiProperty()
  readonly created: Date;

}
