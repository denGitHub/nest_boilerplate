import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import {ApiOkResponse, ApiTags} from "@nestjs/swagger";

@Controller()
@ApiTags('Base')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('helthCheck')
  @ApiOkResponse({
    description: 'The service is working',
  })
  getHello(): string {
    return this.appService.getHello();
  }
}
