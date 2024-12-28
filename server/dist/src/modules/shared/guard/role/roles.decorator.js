"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Roles = void 0;
const common_1 = require("@nestjs/common");
const role_enum_1 = require("./role.enum");
const Roles = (...roles) => (0, common_1.SetMetadata)(role_enum_1.ROLES_KEY, roles);
exports.Roles = Roles;
//# sourceMappingURL=roles.decorator.js.map