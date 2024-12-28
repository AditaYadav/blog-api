import { Logger } from 'winston';
type LogMessage = string | number | Record<string, any>;
export declare class LoggerService {
    private readonly logger;
    constructor(logger: Logger);
    warn(message: LogMessage): void;
    error(message: LogMessage): void;
    debug(message: LogMessage): void;
    info(message: LogMessage): void;
    verbose(message: LogMessage): void;
}
export {};
