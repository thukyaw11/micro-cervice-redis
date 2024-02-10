import { Injectable, Logger } from '@nestjs/common';

const logger = new Logger('Auth');
@Injectable()
export class AuthService {
  getUser(username): string {
    logger.log("🔥 Auth service fired")
    return `Hello, ${username}`;
  }
}
