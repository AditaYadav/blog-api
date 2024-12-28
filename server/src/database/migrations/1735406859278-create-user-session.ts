import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateUserSession1735406859278 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
        CREATE TABLE IF NOT EXISTS user_session (
          id SERIAL PRIMARY KEY,
          token VARCHAR(255) NOT NULL,
          expires_at TIMESTAMP,
          user_id INT NOT NULL,
          is_active BOOLEAN NOT NULL,
          created_at TIMESTAMP DEFAULT NOW(),
          updated_at TIMESTAMP DEFAULT NOW() ,
          FOREIGN KEY (user_id) REFERENCES "user"(id) ON DELETE CASCADE ON UPDATE CASCADE
      );
      
      CREATE INDEX  IF NOT EXISTS idx_token ON user_session (token);
      CREATE INDEX  IF NOT EXISTS idx_user_id ON user_session (user_id);
      
            `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("DROP TABLE user_session");
    }
}