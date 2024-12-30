import {
    Injectable,
} from "@nestjs/common";

import { BlogDto } from "../dto/blog.dto";
import { BlogRepository } from "src/modules/shared/domain/blog/blog.repository";
@Injectable()
export class BlogService {
    async createBlog(data: BlogDto, imagePath: string) {
        let images = []
        try {
            const query = `
                        INSERT INTO "blog" (heading, content, user_id, images) 
                        VALUES (
                            $1, 
                            $2, 
                            $3,
                            $4
                        );
              `;
            images.push(imagePath)
            await BlogRepository.query(query, [data.content, data.heading, data.userId, images]);
            return {
                message: "Blog created"
            };
        } catch (error) {
            console.log(error)
        }
    }
    async updateBlogById(data: BlogDto, id: string) {
        try {
            const result = await BlogRepository.update(id, data)
            return result
        } catch (error) {
            console.log(error)
        }
    }
}
