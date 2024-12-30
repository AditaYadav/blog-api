import {
    Injectable,
} from "@nestjs/common";

import { BlogRepository } from "src/modules/shared/domain/blog/blog.repository";
import { CommentRepository } from "src/modules/shared/domain/comment/comment.repository";
@Injectable()
export class CommentService {
    async addComment(body: any, blogId: string, userId: string) {
        try {
            const result = await CommentRepository.create({
                blogId, comment: body.comment, userId
            })
            const savedComment = await CommentRepository.save(result)
            return savedComment
        } catch (error) {
            return error
        }
    }
}
