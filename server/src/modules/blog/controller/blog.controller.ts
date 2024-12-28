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
import { BlogService } from "../service/blog.service";
import { BlogDto } from "../dto/blog.dto";
import { AuthGuard } from "src/modules/shared/guard/auth/auth.guard";

@Controller("blog")
@ApiTags("Blog")
// @UseGuards(AuthGuard)
@ApiBearerAuth()
export class BlogController {
    constructor(private blogService: BlogService) { }
    @Post("")
    @HttpCode(StatusCodes.CREATED)
    @UseInterceptors(TransformInterceptor)
    async createBlog(@Body() body: BlogDto) {
        const data = await this.blogService.createBlog(body);
        return data;
    }

    @Put(":id")
    @ApiParam({ name: 'id', required: true })
    @HttpCode(StatusCodes.CREATED)
    @UseInterceptors(TransformInterceptor)
    async updateBlog(@Body() body: BlogDto, @Param('id') id: string) {
        const data = await this.blogService.updateBlogById(body, id);
        return data;
    }
    // getBYID
    // deleteBYID
    // getALL 
}
