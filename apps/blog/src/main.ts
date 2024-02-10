import { NestFactory } from '@nestjs/core';
import { BlogModule } from './blog.module';
import { Logger } from '@nestjs/common';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

const logger = new Logger('Blog');


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
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(BlogModule, microserviceOptions);
  await app.listen();
  logger.log("🚀 Blog service up and listening")
}
bootstrap();
