import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateDatabase1735583884198 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE DATABASE IF NOT EXISTS blog;
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
