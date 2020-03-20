import { NestFactory } from '@nestjs/core';
import * as RateLimit from 'express-rate-limit';
import { AppModule } from './app.module';
import { ConfigModule } from '@nestjs/config';
import { setupSwagger } from '../config/swagger';
import configuration from '../config/configuration';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  setupSwagger(app);
  app.use(
    new RateLimit({
      windowMs: 10 * 60 * 1000,
      max: 30,
    }),
  );
  await app.listen(configuration().SERVER.port);
}
bootstrap();
