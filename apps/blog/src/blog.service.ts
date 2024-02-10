import { Injectable, Logger } from '@nestjs/common';

const logger = new Logger("Blog")

@Injectable()
export class BlogService {
  getBlog(title:string): string {
    logger.log("🔥 Blog service fired")
    return title;
  }
}
