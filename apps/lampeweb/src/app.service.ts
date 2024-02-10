import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy} from '@nestjs/microservices';

@Injectable()
export class AppService {
  constructor(
    @Inject('BLOG_SERVICE') private readonly blog: ClientProxy,
    @Inject('USER_SERVICE') private readonly user: ClientProxy
  ) {}

  async getBlog(){
    return this.blog.send({ cmd: 'getBlog'}, 'Microservice with nest js, using Redis transport, in monorepo');
  }

  async getUser() {
    return this.user.send({ cmd: 'getUser'}, 'Min Thu Kyaw');
  }
}
