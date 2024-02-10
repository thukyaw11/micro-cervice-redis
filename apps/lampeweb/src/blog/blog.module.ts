import { Module } from '@nestjs/common';
import { BlogService } from './blog.service';
import { BlogController } from './blog.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  controllers: [BlogController],
  providers: [BlogService],
  exports: [BlogService]
})
export class BlogModule {}
