"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const winston = require("winston");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const typeorm_1 = require("@nestjs/typeorm");
const ormconfig_1 = require("../ormconfig");
const shared_module_1 = require("./modules/shared/shared.module");
const nest_winston_1 = require("nest-winston");
const formatter_1 = require("./modules/shared/services/logger/formatter");
const auth_module_1 = require("./modules/auth/auth.module");
const { combine, colorize, splat, timestamp } = winston.format;
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot(ormconfig_1.AppDataSource.options),
            nest_winston_1.WinstonModule.forRoot({
                format: combine(splat(), colorize(), timestamp(), formatter_1.logFormatter),
                transports: [
                    new winston.transports.Console({
                        format: winston.format.combine(winston.format.timestamp(), winston.format.ms(), winston.format.splat())
                    })
                ]
            }),
            shared_module_1.SharedModule,
            auth_module_1.AuthModule
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map