import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateBlog1735407571432 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
                CREATE TABLE IF NOT EXISTS "blog" (
                    id SERIAL PRIMARY KEY,       
                    heading VARCHAR(255) NOT NULL,
                    content TEXT NOT NULL,       
                    images TEXT[],
                    user_id INT NOT NULL,   
                    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
                );
                ALTER TABLE "blog" 
                ADD CONSTRAINT "fk_user" 
                FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE CASCADE;
        
                CREATE INDEX "idx_blog_user_id" ON "blog"("user_id");
                CREATE INDEX "idx_blog_heading" ON "blog"("heading");
                CREATE INDEX "idx_blog_created_at" ON "blog"("created_at");
            `);

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("DROP INDEX IF EXISTS idx_blog_content_fulltext;");
        await queryRunner.query("DROP INDEX IF EXISTS idx_blog_created_at;");
        await queryRunner.query("DROP INDEX IF EXISTS idx_blog_heading;");
        await queryRunner.query("DROP INDEX IF EXISTS idx_blog_user_id;");
        await queryRunner.query("DROP TABLE IF EXISTS blog;");
    }

}
