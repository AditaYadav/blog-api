"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const config_1 = require("./src/config");
const typeorm_1 = require("typeorm");
exports.AppDataSource = new typeorm_1.DataSource({
    type: "postgres",
    host: config_1.default.database.HOST,
    port: config_1.default.database.PORT,
    username: config_1.default.database.USER,
    password: config_1.default.database.PASSWORD,
    database: config_1.default.database.NAME,
    entities: ["dist/**/*.entity.js"],
    logging: true,
    synchronize: false,
    migrationsRun: false,
    migrations: ["dist/**/migrations/*.js"],
});
//# sourceMappingURL=ormconfig.js.map