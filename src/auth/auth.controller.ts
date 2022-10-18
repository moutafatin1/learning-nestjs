import { Controller, Get } from '@nestjs/common';

@Controller('auth')
export class AuthController {
  @Get('aza')
  getUser() {
    return 'Hello User';
  }
}
