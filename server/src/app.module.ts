import { Module } from '@nestjs/common';
import * as winston from 'winston';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppDataSource } from 'ormconfig';
import { SharedModule } from './modules/shared/shared.module';
import { WinstonModule } from 'nest-winston';
import { logFormatter } from './modules/shared/services/logger/formatter';
import { AuthModule } from './modules/auth/auth.module';
import { BlogModule } from './modules/blog/blog.module';
import { CommentModule } from './modules/comment/comment.module';
const { combine, colorize, splat, timestamp } = winston.format;

@Module({
  imports: [
    TypeOrmModule.forRoot(AppDataSource.options),
    WinstonModule.forRoot({
      format: combine(splat(), colorize(), timestamp(), logFormatter),
      transports: [
        new winston.transports.Console({
          format: winston.format.combine(
            winston.format.timestamp(),
            winston.format.ms(),
            winston.format.splat()
          )
        })
      ]
    }),
    SharedModule,
    AuthModule,
    BlogModule,
    CommentModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
