"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RateLimitMiddleware = void 0;
const common_1 = require("@nestjs/common");
const express_rate_limit_1 = require("express-rate-limit");
const app_constants_1 = require("../../constants/app.constants");
let RateLimitMiddleware = class RateLimitMiddleware {
    use(req, res, next) {
        (0, express_rate_limit_1.default)({
            windowMs: 60 * 1000 * app_constants_1.LOGIN_ATTEMPT_IN_DURATION,
            max: app_constants_1.MAX_LOGIN_ATTEMPTS_IN_DURATION,
            message: app_constants_1.MAX_LOGIN_ATTEMPT_ERROR_MSG
        })(req, res, next);
    }
};
exports.RateLimitMiddleware = RateLimitMiddleware;
exports.RateLimitMiddleware = RateLimitMiddleware = __decorate([
    (0, common_1.Injectable)()
], RateLimitMiddleware);
//# sourceMappingURL=rate-limiter.js.map