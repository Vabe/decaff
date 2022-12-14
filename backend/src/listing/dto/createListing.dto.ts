import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsOptional } from "class-validator";

export class CreateListingDto {
  @ApiProperty()
  @IsNotEmpty()
  name: string;

  @ApiProperty()
  @IsOptional()
  price: number;

  @ApiProperty({ type: "string", format: "binary", required: true })
  file: Express.Multer.File;
}
