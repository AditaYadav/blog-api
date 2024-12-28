"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepository = void 0;
const ormconfig_1 = require("../../../../../ormconfig");
const user_entity_1 = require("./user.entity");
exports.UserRepository = ormconfig_1.AppDataSource.getRepository(user_entity_1.User);
//# sourceMappingURL=user.repository.js.map