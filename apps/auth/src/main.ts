import { NestFactory } from '@nestjs/core';
import { AuthModule } from './auth.module';
import { Logger } from '@nestjs/common';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

const logger = new Logger('Auth');

const microserviceOptions: MicroserviceOptions = {
  transport: Transport.REDIS,
  options: {
    host: 'localhost',
    port: 6379,
    retryAttempts: 5,
    retryDelay: 5000,
  },
};
async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(AuthModule, microserviceOptions);
  await app.listen();
  logger.log("🚀 Auth service up and listening")
}
bootstrap();
