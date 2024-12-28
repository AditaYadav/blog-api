import { ExceptionFilter, ArgumentsHost, HttpException } from "@nestjs/common";
export declare class ForbiddenExceptionFilter implements ExceptionFilter {
    catch(exception: HttpException, host: ArgumentsHost): void;
}
