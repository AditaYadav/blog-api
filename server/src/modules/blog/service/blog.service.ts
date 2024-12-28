import {
    Injectable,
} from "@nestjs/common";

import { BlogDto } from "../dto/blog.dto";
import { BlogRepository } from "src/modules/shared/domain/blog/blog.repository";
@Injectable()
export class BlogService {
    async createBlog(data: BlogDto) {
        try {
            const query = `
                        INSERT INTO "blog" (heading, content, user_id) 
                        VALUES (
                            $1, 
                            $2, 
                            $3
                        );
              `;
            await BlogRepository.query(query, [data.content, data.heading, data.userId]);
            return {
                message: "Blog created"
            };
        } catch (error) {
            console.log(error)
        }
    }
    async updateBlogById(data: BlogDto, id: string) {
        try {
            // const query = `
            //             INSERT INTO "blog" (heading, content, user_id) 
            //             VALUES (
            //                 $1, 
            //                 $2, 
            //                 $3
            //             );
            //   `;
            // await BlogRepository.query(query, [data.content, data.heading, data.userId]);
            // return {
            //     message: "Blog created"
            // };
            const result = await BlogRepository.update(id, data)
            return result
        } catch (error) {
            console.log(error)
        }
    }
}
