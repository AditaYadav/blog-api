import { SetMetadata } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { ROLES_KEY } from "./role.enum";

export const Roles = (...roles: string[]) => SetMetadata(ROLES_KEY, roles);
