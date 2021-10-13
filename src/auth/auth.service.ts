import { Injectable } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { UsersService } from '@users/users.service'

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(loginData): Promise<any> {
    const user = await this.usersService.findOne(loginData.name)

    if (user?.password === loginData.password) {
      return user
    }
    return null
  }

  login(user) {
    return this.jwtService.sign(user)
  }

  async signup(user) {
    await this.usersService.createUser(user)

    return this.login(user)
  }
}
