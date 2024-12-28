import { Module } from "@nestjs/common";

import { SharedModule } from "../shared/shared.module";
import { BlogController } from "./controller/blog.controller";
import { BlogService } from "./service/blog.service";

@Module({
    controllers: [BlogController],
    providers: [BlogService],
    imports: [SharedModule],
})
export class BlogModule { }
