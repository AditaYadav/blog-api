import { Module } from "@nestjs/common";

// import { SharedModule } from "src/shared/shared.module";

import { AuthService } from "./service/auth.service";
import { AuthController } from "./controller/auth.controller";
import { SharedModule } from "../shared/shared.module";

@Module({
  controllers: [AuthController],
  providers: [AuthService],
  imports: [SharedModule],
})
export class AuthModule {}
