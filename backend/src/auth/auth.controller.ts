import { BadRequestException, Body, Controller, Post } from "@nestjs/common";
import { ApiOkResponse, ApiTags } from "@nestjs/swagger";
import { UserRole } from "@prisma/client";
import { CreateUserDto } from "../user/dto/createUser.dto";
import { Auth } from "./auth.entity";
import { AuthService } from "./auth.service";
import { LoginDto } from "./dto/login.dto";

@ApiTags("Auth")
@Controller("auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post("login")
  @ApiOkResponse({ type: Auth })
  login(@Body() { email, password }: LoginDto) {
    return this.authService.login(email, password);
  }

  @Post("register")
  @ApiOkResponse({ type: Auth })
  register(@Body() user: CreateUserDto) {
    if (user.role === UserRole.ADMIN) {
      throw new BadRequestException("You can only register as user.");
    }

    return this.authService.register(user);
  }
}
