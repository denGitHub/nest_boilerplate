'use strict';

import {
  IsString,
  IsEmail,
  MinLength,
  IsNotEmpty,
  IsPhoneNumber,
  IsOptional,
} from 'class-validator';
import {ApiProperty} from '@nestjs/swagger';
import {Column} from 'typeorm';

export class UserAuthRegisterDto {

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly username: string;

  @IsString()
  @IsEmail()
  @IsNotEmpty()
  @ApiProperty()
  readonly email: string;

  @IsString()
  @MinLength(6)
  @ApiProperty({minLength: 6})
  readonly password: string;

}
