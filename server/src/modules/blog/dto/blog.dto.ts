import { ApiProperty } from "@nestjs/swagger";
import {
  IsNumber,
  IsString,
} from "class-validator";

export class BlogDto {
  @IsString()
  @ApiProperty()
  heading: string;

  @IsString()
  @ApiProperty()
  content: string;

  @IsNumber()
  @ApiProperty()
  userId: number;

}