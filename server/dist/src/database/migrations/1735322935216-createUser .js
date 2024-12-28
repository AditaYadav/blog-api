"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUser1735322935216 = void 0;
class CreateUser1735322935216 {
    async up(queryRunner) {
        await queryRunner.query(`
           CREATE TABLE IF NOT EXISTS "user" (
                id SERIAL PRIMARY KEY,
                name VARCHAR(100) NOT NULL,
                email VARCHAR(150) UNIQUE NOT NULL,
                password VARCHAR(255) NOT NULL,
                created_at TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP(6),
                updated_at TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP(6),
                permission VARCHAR(50) DEFAULT 'user'
            );
        `);
    }
    async down(queryRunner) {
        await queryRunner.query("DROP TABLE user");
    }
}
exports.CreateUser1735322935216 = CreateUser1735322935216;
//# sourceMappingURL=1735322935216-createUser%20.js.map