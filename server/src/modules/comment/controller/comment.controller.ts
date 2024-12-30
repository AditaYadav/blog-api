import {
    Get,
    Body,
    Post,
    HttpCode,
    Controller,
    UseGuards,
    UseInterceptors,
    Put,
    Param,
} from "@nestjs/common";
import { StatusCodes } from "http-status-codes";
import { ApiBearerAuth, ApiParam, ApiTags } from "@nestjs/swagger";
import { TransformInterceptor } from "src/modules/shared/interceptors/ResponseTransform.interceptor";
import { AuthGuard } from "src/modules/shared/guard/auth/auth.guard";
import { CommentService } from "../service/comment.service";
import { Commentdto } from "../dto/comment.dto";

@Controller("comment")
@ApiTags("Comment")
// @UseGuards(AuthGuard)
@ApiBearerAuth()
export class CommentController {
    constructor(private commentService: CommentService) { }
    @Post(":blogId/:userId")
    @HttpCode(StatusCodes.CREATED)
    @ApiParam({ name: 'blogId', required: true })
    @ApiParam({ name: 'userId', required: true })
    @UseInterceptors(TransformInterceptor)
    async createBlog(@Body() body: Commentdto, @Param('blogId') blogId: string, @Param('userId') userId: string,) {
        // TODO: get userID from auth tokens
        const data = await this.commentService.addComment(body, blogId, userId);
        return data;
    }
}
