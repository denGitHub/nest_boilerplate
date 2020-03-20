import { Module } from '@nestjs/common';
import { RolesController } from './role.controller';
import { RolesService } from './role.service';

@Module({
  controllers: [RolesController],
  providers: [RolesService]
})
export class RolesModule {}
