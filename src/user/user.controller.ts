import {
  Controller,
  Get,
  Post,
  UsePipes,
  Body,
  Query,
  Param,
  UseGuards,
} from '@nestjs/common';
import {
  ApiOkResponse,
  ApiBearerAuth,
  ApiTags
} from '@nestjs/swagger';

import {UserService} from './user.service';
import {UserAuthLoginDto, } from './dto/UserAuthLoginDto';
import {UserAuthRegisterDto, } from './dto/UserAuthRegisterDto';
import { UserRO} from './dto/UserRO';
import {ValidationPipe} from '../../shared/validation.pipe';
import {UserDto} from "./dto/UserDto";

@Controller('user')
@ApiTags('User')
export class UserController {

  constructor(private userService: UserService) {
  }

  @Get()
  getHello(): string {
    return 'fine';
  }

  @Get('')
  // @UsePipes(new ValidationPipe())
  getAll(@Query('page') page: number) {
    return this.userService.getAll(page);
  }

  @Post('login')
  @ApiOkResponse({
    type: UserRO,
    description: 'User info with access token',
  })
  @UsePipes(new ValidationPipe())
  login(@Body() data: UserAuthLoginDto) {
    console.log("data", data)

    return this.userService.login(data);
  }

  @Post('register')
  @ApiOkResponse({type: UserDto, description: 'Successfully Registered'})
  @UsePipes(new ValidationPipe())
  register(@Body() data: UserAuthRegisterDto) {
    return this.userService.register(data);
  }
}
