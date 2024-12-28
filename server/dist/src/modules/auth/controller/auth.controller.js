"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const common_1 = require("@nestjs/common");
const http_status_codes_1 = require("http-status-codes");
const auth_service_1 = require("../service/auth.service");
const auth_dto_1 = require("../dto/auth.dto");
const swagger_1 = require("@nestjs/swagger");
const user_entity_1 = require("../../shared/domain/user/user.entity");
const ResponseTransform_interceptor_1 = require("../../shared/interceptors/ResponseTransform.interceptor");
const current_user_decorator_1 = require("../../shared/decorator/current-user/current-user.decorator");
let AuthController = class AuthController {
    constructor(authService) {
        this.authService = authService;
    }
    async createUser(body) {
        const data = await this.authService.signUp(body);
        return data;
    }
    async login(body) {
        const data = await this.authService.signIn(body.email, body.password);
        return data;
    }
    async logout(body) {
        await this.authService.logout(body.refreshToken);
        return {};
    }
    userInfo(user) {
        console.log(user);
        return { user };
    }
    async refresh(body) {
        const data = await this.authService.refresh(body.refreshToken);
        return data;
    }
    test() {
        return {
            message: "Welcome",
        };
    }
};
exports.AuthController = AuthController;
__decorate([
    (0, common_1.Post)("signup"),
    (0, common_1.HttpCode)(http_status_codes_1.StatusCodes.CREATED),
    (0, common_1.UseInterceptors)(ResponseTransform_interceptor_1.TransformInterceptor),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [auth_dto_1.SignUpDTO]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "createUser", null);
__decorate([
    (0, common_1.Post)("login"),
    (0, common_1.UseInterceptors)(ResponseTransform_interceptor_1.TransformInterceptor),
    (0, common_1.HttpCode)(http_status_codes_1.StatusCodes.OK),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [auth_dto_1.LoginDTO]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "login", null);
__decorate([
    (0, common_1.Post)("logout"),
    (0, common_1.UseInterceptors)(ResponseTransform_interceptor_1.TransformInterceptor),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [auth_dto_1.LogoutDTO]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "logout", null);
__decorate([
    (0, common_1.Get)("me"),
    (0, common_1.UseInterceptors)(ResponseTransform_interceptor_1.TransformInterceptor),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.User]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "userInfo", null);
__decorate([
    (0, common_1.Post)("refresh"),
    (0, common_1.UseInterceptors)(ResponseTransform_interceptor_1.TransformInterceptor),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [auth_dto_1.RefreshDTO]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "refresh", null);
__decorate([
    (0, common_1.Get)("test"),
    (0, common_1.UseInterceptors)(ResponseTransform_interceptor_1.TransformInterceptor),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "test", null);
exports.AuthController = AuthController = __decorate([
    (0, common_1.Controller)("auth"),
    (0, swagger_1.ApiTags)("Auth"),
    __metadata("design:paramtypes", [auth_service_1.AuthService])
], AuthController);
//# sourceMappingURL=auth.controller.js.map