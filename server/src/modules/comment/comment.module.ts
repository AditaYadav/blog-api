import { Module } from "@nestjs/common";

import { SharedModule } from "../shared/shared.module";
import { CommentController } from "./controller/comment.controller";
import { CommentService } from "./service/comment.service";

@Module({
    controllers: [CommentController],
    providers: [CommentService],
    imports: [SharedModule],
})
export class CommentModule { }
