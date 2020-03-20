'use strict';


import {ApiProperty} from '@nestjs/swagger';
import {UserDto} from './UserDto';
import {TokenPayloadDto} from './TokenPayloadDto';

export class UserRO {
  @ApiProperty({ type: UserDto })
  user?:Object;

  @ApiProperty({ type: TokenPayloadDto })
  token?: TokenPayloadDto;

  constructor(user:UserDto){
    this.user=user;
  }
}
