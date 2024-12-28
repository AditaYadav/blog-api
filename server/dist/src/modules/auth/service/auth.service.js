"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const user_session_repository_1 = require("../../shared/domain/user-session/user-session.repository");
const user_repository_1 = require("../../shared/domain/user/user.repository");
const jwt_1 = require("../../shared/util/jwt");
const PasswordUtil = require("../../shared/util/password");
let AuthService = class AuthService {
    async signUp(user) {
        const existingUser = await user_repository_1.UserRepository.findOne({
            where: { email: user.email },
        });
        if (existingUser) {
            throw new common_1.BadRequestException("Email already in use");
        }
        const hashedPassoword = await PasswordUtil.hash(user.password);
        const data = user_repository_1.UserRepository.create({
            email: user.email,
            password: hashedPassoword,
            Name: user.name,
        });
        await user_repository_1.UserRepository.save(data);
        return { message: "User created successfully!" };
    }
    async signIn(email, password) {
        const user = await user_repository_1.UserRepository.findOne({
            where: [{ email: email }],
        });
        if (!user) {
            throw new common_1.BadRequestException("Invalid credentials");
        }
        const isPasswordMatch = await PasswordUtil.compare(password, user.password);
        if (!isPasswordMatch) {
            throw new common_1.BadRequestException("Invalid credentials");
        }
        const auth = await this.generateUserAuthTokens(user);
        const data = {
            email: user.email,
            name: user.Name
        };
        return { user: data, auth };
    }
    async logout(refreshToken) {
        const session = await user_session_repository_1.UserSessionRepository.findOne({
            where: { token: refreshToken, isActive: true },
        });
        if (!session) {
            throw new common_1.BadRequestException();
        }
        session.isActive = false;
        await user_session_repository_1.UserSessionRepository.save(session);
    }
    async refresh(token) {
        try {
            const data = (0, jwt_1.verifyRefreshToken)(token);
            const { email } = data;
            const session = await user_session_repository_1.UserSessionRepository.findOne({
                where: { token },
            });
            const user = await user_repository_1.UserRepository.findOne({ where: { email } });
            if (!session || !user) {
                throw new Error("Forbidden");
            }
            if (session && !session.isActive) {
                await user_session_repository_1.UserSessionRepository.update({ userId: user.id }, { isActive: false });
                throw new Error("Forbidden");
            }
            session.isActive = false;
            await user_session_repository_1.UserSessionRepository.save(session);
            const auth = await this.generateUserAuthTokens(user);
            return auth;
        }
        catch (err) {
            throw new common_1.ForbiddenException();
        }
    }
    async generateUserAuthTokens(user) {
        const refreshToken = (0, jwt_1.generateRefreshToken)(user.email);
        const accessToken = (0, jwt_1.generateAccessToken)(user.email);
        const expiresAt = new Date();
        const userSession = user_session_repository_1.UserSessionRepository.create({
            token: refreshToken,
            expiresAt: expiresAt,
            userId: user.id,
            isActive: true,
        });
        await user_session_repository_1.UserSessionRepository.save(userSession);
        return { accessToken, refreshToken };
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)()
], AuthService);
//# sourceMappingURL=auth.service.js.map