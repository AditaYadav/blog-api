import {
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  Injectable,
} from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { ROLES_KEY } from "./role.enum";

@Injectable()
export class RoleGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const requiredRoles = this.reflector.getAllAndOverride<string[]>(
      ROLES_KEY,
      [context.getHandler(), context.getClass()]
    );

    if (!requiredRoles) {
      return false; // No roles , no access to anything.
    }

    const { currentUser } = context.switchToHttp().getRequest();

    if (requiredRoles.includes(currentUser.role.name)) {
      return true;
    } else {
      throw new ForbiddenException(
        "You are not allowed to perform this action."
      );
    }
  }
}
