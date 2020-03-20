import { Module } from '@nestjs/common';
import {TypeOrmModule} from "@nestjs/typeorm";

import { GrowerController } from './grower.controller';
import { GrowerService } from './grower.service';
import {GrowerEntity} from "./grower.to.entity";

@Module({
  imports: [ TypeOrmModule.forFeature([ GrowerEntity ]) ],
  controllers: [GrowerController],
  providers: [GrowerService]
})
export class GrowerModule {}
