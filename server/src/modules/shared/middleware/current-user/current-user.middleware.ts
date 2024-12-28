import { Request, Response } from "express";
import {
  HttpException,
  HttpStatus,
  Injectable,
  NestMiddleware,
} from "@nestjs/common";
import { verifyAccessToken } from "../../util/jwt";
import { UserRepository } from "../../domain/user/user.repository";


@Injectable()
export class CurrentUserMiddleware implements NestMiddleware {
  async use(req: Request, response: Response, next: () => void) {
    const { authorization } = req.headers;

    if (!authorization) {
      next();
      return;
    }

    try {
      const token = authorization.replace("Bearer ", "");

      const data: any = verifyAccessToken(token);
      const { email } = data;

      const user = await UserRepository.findOne({ where: { email } });

      // req.currentUser = user;
    } catch (err) {
      if (err.message === "jwt malformed") {
        // req.currentUser = null;
        req.statusMessage = "Invalid token";
      } else if (err.message === "jwt expired") {
        // req.currentUser = null;
        req.statusMessage = "Token expired";
      }
      throw new HttpException(req.statusMessage, HttpStatus.UNAUTHORIZED);
    }

    next();
  }
}
