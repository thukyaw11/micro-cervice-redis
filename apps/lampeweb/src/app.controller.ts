import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getBlog() {
    const blogTitle =  this.appService.getBlog();
    return blogTitle;
  }

  @Get('/user')
  getUser() {
    const user = this.appService.getUser();
    return user;
  }
}
