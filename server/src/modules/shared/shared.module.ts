import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';

import { LoggerService } from './services/logger/logger.service';
import { CurrentUserMiddleware } from './middleware/current-user/current-user.middleware';

@Module({
  providers: [LoggerService],
  exports: [LoggerService],
})
export class SharedModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(CurrentUserMiddleware).forRoutes('*');
  }
}
