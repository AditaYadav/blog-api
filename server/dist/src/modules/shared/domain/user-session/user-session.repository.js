"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserSessionRepository = void 0;
const ormconfig_1 = require("../../../../../ormconfig");
const user_session_entity_1 = require("./user-session.entity");
exports.UserSessionRepository = ormconfig_1.AppDataSource.getRepository(user_session_entity_1.UserSession);
//# sourceMappingURL=user-session.repository.js.map