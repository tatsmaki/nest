import { Injectable, HttpException } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { UsersService } from '@users/users.service'

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  login = async ({ username, password }) => {
    const user = await this.usersService.findOne(username)

    if (user?.password === password) {
      return { token: this.jwtService.sign({ username, password }) }
    }
    throw new HttpException('Invalid username or password', 401)
  }

  signup = async (user) => {
    await this.usersService.createUser(user)

    return this.login(user)
  }
}
