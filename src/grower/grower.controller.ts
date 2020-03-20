import {Body, Controller, Post, Get, Query, UsePipes} from '@nestjs/common';

import { ValidationPipe } from '../../shared/validation.pipe';
import {GrowerDTO} from './grower.dto';
import {GrowerService} from "./grower.service";
import {ApiTags} from "@nestjs/swagger";


@Controller('grower')
@ApiTags('Grower')
export class GrowerController {

  constructor(private growerService: GrowerService) {}

  @Post()
  @UsePipes(new ValidationPipe())
  create(@Body() data: GrowerDTO) {
    return this.growerService.register(data);
  }

  @Get()
  getAll(@Query() page: Object) {
    return this.growerService.getAll(page);
  }
}
