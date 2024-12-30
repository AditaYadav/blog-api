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
    UploadedFile,
} from "@nestjs/common";
import { StatusCodes } from "http-status-codes";
import { ApiBearerAuth, ApiBody, ApiConsumes, ApiParam, ApiTags } from "@nestjs/swagger";
import { TransformInterceptor } from "src/modules/shared/interceptors/ResponseTransform.interceptor";
import { BlogService } from "../service/blog.service";
import { BlogDto } from "../dto/blog.dto";
import { AuthGuard } from "src/modules/shared/guard/auth/auth.guard";
import { FileInterceptor } from "@nestjs/platform-express";
import { diskStorage } from "multer";
import { v4 as uuidv4 } from "uuid";
import { extname } from "path";
@Controller("blog")
@ApiTags("Blog")
// @UseGuards(AuthGuard)
@ApiBearerAuth()
export class BlogController {
    constructor(private blogService: BlogService) { }
    @Post("")
    @HttpCode(StatusCodes.CREATED)
    @UseInterceptors(
        TransformInterceptor,
        FileInterceptor("file", {
            storage: diskStorage({
                destination: "./uploads/blogs",
                filename: (req, file, cb) => {
                    const uniqueName = `${uuidv4()}${extname(file.originalname)}`;
                    cb(null, uniqueName);
                },
            }),
        }),
    )
    async createBlog(@Body() body: BlogDto, @UploadedFile() file: any,) {
        const imagePath = file ? `/uploads/blogs/${file.filename}` : null;
        const data = await this.blogService.createBlog(body, imagePath);
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
