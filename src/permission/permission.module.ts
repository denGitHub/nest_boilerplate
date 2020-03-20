import { Module } from '@nestjs/common';
import { PermissionsController } from './permission.controller';
import { PermissionsService } from './permission.service';

@Module({
  controllers: [PermissionsController],
  providers: [PermissionsService]
})
export class PermissionsModule {}
