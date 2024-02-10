import { Controller, Get } from '@nestjs/common';
import { BlogService } from './blog.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class BlogController {
  constructor(private readonly blogService: BlogService) {}

  @MessagePattern({cmd: 'getBlog'})
  getBlog(title: string): string {
    return this.blogService.getBlog(title);
  }
}
