import { ApiProperty } from "@nestjs/swagger";
import {
  IsEmail,
  IsString,
} from "class-validator";

export class SignUpDTO {
  @IsEmail()
  @ApiProperty()
  email: string;

  @IsString()
  @ApiProperty()
  password: string;

  @IsString()
  @ApiProperty()
  name: string;

}

export class LoginDTO {
  @IsString()
  @ApiProperty()
  email: string;

  @IsString()
  @ApiProperty()
  password: string;
}

export class LogoutDTO {
  @IsString()
  refreshToken: string;
}

export class RefreshDTO extends LogoutDTO { }
