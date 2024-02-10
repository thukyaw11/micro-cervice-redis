import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

const logger = new Logger("Gateway");

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000).then(() => {
    logger.log("🚀 Gateway server up at 3000")
  });
}
bootstrap();
