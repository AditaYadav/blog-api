"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CurrentUserMiddleware = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("../../util/jwt");
const user_repository_1 = require("../../domain/user/user.repository");
let CurrentUserMiddleware = class CurrentUserMiddleware {
    async use(req, response, next) {
        const { authorization } = req.headers;
        if (!authorization) {
            next();
            return;
        }
        try {
            const token = authorization.replace("Bearer ", "");
            const data = (0, jwt_1.verifyAccessToken)(token);
            const { email } = data;
            const user = await user_repository_1.UserRepository.findOne({ where: { email } });
        }
        catch (err) {
            if (err.message === "jwt malformed") {
                req.statusMessage = "Invalid token";
            }
            else if (err.message === "jwt expired") {
                req.statusMessage = "Token expired";
            }
            throw new common_1.HttpException(req.statusMessage, common_1.HttpStatus.UNAUTHORIZED);
        }
        next();
    }
};
exports.CurrentUserMiddleware = CurrentUserMiddleware;
exports.CurrentUserMiddleware = CurrentUserMiddleware = __decorate([
    (0, common_1.Injectable)()
], CurrentUserMiddleware);
//# sourceMappingURL=current-user.middleware.js.map