import { Controller, Body, Post } from '@nestjs/common'
import { AuthService } from '@auth/auth.service'

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  login(@Body() user) {
    return this.authService.login(user)
  }

  @Post('signup')
  signup(@Body() user) {
    return this.authService.signup(user)
  }
}
