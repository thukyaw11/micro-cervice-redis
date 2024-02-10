import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BlogModule } from './blog/blog.module';
import { BlogService } from './blog/blog.service';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'BLOG_SERVICE',
        transport: Transport.REDIS,
        options: {
          host: 'localhost',
          port: 6379,
        },
      },
    ]),
    ClientsModule.register([
      {
        name: 'USER_SERVICE',
        transport: Transport.REDIS,
        options: {
          host: 'localhost',
          port: 6379
        }
      }
    ])
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
