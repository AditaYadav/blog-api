"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const swagger_1 = require("@nestjs/swagger");
const ormconfig_1 = require("../ormconfig");
const config_1 = require("./config");
const nest_winston_1 = require("nest-winston");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useLogger(app.get(nest_winston_1.WINSTON_MODULE_NEST_PROVIDER));
    const config = new swagger_1.DocumentBuilder()
        .setTitle("Blog")
        .setDescription("Blog Core API")
        .setVersion("1.0")
        .addBearerAuth()
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup("api", app, document);
    await ormconfig_1.AppDataSource.initialize();
    await app.listen(config_1.default.PORT);
}
bootstrap();
//# sourceMappingURL=main.js.map