import {
  Get,
  Body,
  Post,
  HttpCode,
  Controller,
  UseGuards,
  UseInterceptors,
} from "@nestjs/common";
import { StatusCodes } from "http-status-codes";

import { AuthService } from "src/modules/auth/service/auth.service";
import {
  LoginDTO,
  LogoutDTO,
  RefreshDTO,
  SignUpDTO,
} from "src/modules/auth/dto/auth.dto";
import { ApiTags } from "@nestjs/swagger";
import { User } from "src/modules/shared/domain/user/user.entity";
import { TransformInterceptor } from "src/modules/shared/interceptors/ResponseTransform.interceptor";
import { CurrentUser } from "src/modules/shared/decorator/current-user/current-user.decorator";

@Controller("auth")
@ApiTags("Auth")
export class AuthController {
  constructor(private authService: AuthService) { }

  @Post("signup")
  @HttpCode(StatusCodes.CREATED)
  @UseInterceptors(TransformInterceptor)
  async createUser(@Body() body: SignUpDTO) {
    const data = await this.authService.signUp(body);
    return data;
  }

  @Post("login")
  @UseInterceptors(TransformInterceptor)
  @HttpCode(StatusCodes.OK)
  async login(@Body() body: LoginDTO) {
    const data = await this.authService.signIn(body.email, body.password);
    return data;
  }

  @Post("logout")
  @UseInterceptors(TransformInterceptor)
  async logout(@Body() body: LogoutDTO) {
    await this.authService.logout(body.refreshToken);
    return {};
  }

  @Get("me")
  @UseInterceptors(TransformInterceptor)
  userInfo(@CurrentUser() user: User) {
    console.log(user)
    return { user };
  }

  @Post("refresh")
  @UseInterceptors(TransformInterceptor)
  async refresh(@Body() body: RefreshDTO) {
    const data = await this.authService.refresh(body.refreshToken);
    return data;
  }

  @Get("test")
  @UseInterceptors(TransformInterceptor)
  test() {
    return {
      message: "Welcome",
    };
  }
}
