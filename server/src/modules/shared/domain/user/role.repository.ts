import { AppDataSource } from "ormconfig";
import { Role } from "./role.entity";

export const RoleRepository = AppDataSource.getRepository(Role);
