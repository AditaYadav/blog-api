import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateComment1735580153148 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE IF NOT EXISTS "comment" (
                id SERIAL PRIMARY KEY,
                blog_id VARCHAR NOT NULL,
                user_id VARCHAR NOT NULL,
                comment TEXT,
                created_at TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP(6) NOT NULL,
                updated_at TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP(6) NOT NULL
            );
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            DROP TABLE "comment";
        `);
    }

}
