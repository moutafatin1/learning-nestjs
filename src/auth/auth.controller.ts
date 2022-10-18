import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signup')
  async signup(@Body() authDto: AuthDto) {
    const newUser = await this.authService.signup(authDto);
    return newUser;
  }

  @Post('signin')
  async signIn(@Body() authDto: AuthDto) {
    const token = await this.authService.signIn(authDto);
    return token;
  }
}
