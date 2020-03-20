import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApiModule } from './user/user.module';
import { RolesModule } from './role/role.module';
import { PermissionsModule } from './permission/permission.module';
import { GrowerModule } from './grower/grower.module';
import configuration from '../config/configuration';

@Module({
  imports: [ApiModule, RolesModule, TypeOrmModule.forRoot(), PermissionsModule, GrowerModule, ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
