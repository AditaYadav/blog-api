"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleRepository = void 0;
const ormconfig_1 = require("../../../../../ormconfig");
const role_entity_1 = require("./role.entity");
exports.RoleRepository = ormconfig_1.AppDataSource.getRepository(role_entity_1.Role);
//# sourceMappingURL=role.repository.js.map