import { Logger } from 'winston';
import { Inject, Injectable } from '@nestjs/common';
import { WINSTON_MODULE_PROVIDER } from 'nest-winston';

type LogMessage = string | number | Record<string, any>;

@Injectable()
export class LoggerService {
  constructor(
    @Inject(WINSTON_MODULE_PROVIDER) private readonly logger: Logger,
  ) {}

  warn(message: LogMessage) {
    this.logger.warn(message);
  }

  error(message: LogMessage) {
    this.logger.error(message);
  }

  debug(message: LogMessage) {
    this.logger.debug(message);
  }

  info(message: LogMessage) {
    this.logger.info(message);
  }

  verbose(message: LogMessage) {
    this.logger.verbose(message);
  }
}
