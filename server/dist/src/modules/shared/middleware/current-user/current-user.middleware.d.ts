import { Request, Response } from "express";
import { NestMiddleware } from "@nestjs/common";
export declare class CurrentUserMiddleware implements NestMiddleware {
    use(req: Request, response: Response, next: () => void): Promise<void>;
}
