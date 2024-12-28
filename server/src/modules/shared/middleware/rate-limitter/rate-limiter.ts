import { Injectable, NestMiddleware } from '@nestjs/common';
import rateLimit from 'express-rate-limit';
import { LOGIN_ATTEMPT_IN_DURATION, MAX_LOGIN_ATTEMPT_ERROR_MSG, MAX_LOGIN_ATTEMPTS_IN_DURATION } from '../../constants/app.constants';

@Injectable()
export class RateLimitMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    rateLimit({
      windowMs: 60 * 1000 * LOGIN_ATTEMPT_IN_DURATION,
      max: MAX_LOGIN_ATTEMPTS_IN_DURATION,
      message: MAX_LOGIN_ATTEMPT_ERROR_MSG
    })(req, res, next);
  }
}
