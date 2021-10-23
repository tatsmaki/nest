import { Controller, Body, Post, Get, Delete, Param } from '@nestjs/common'
import { UsersService } from './users.service'
import { CreateUserDto } from './schemas/user.dto'

@Controller('users')
export class UsersController {
  private readonly usersService: UsersService

  constructor(usersService: UsersService) {
    this.usersService = usersService
  }

  @Post()
  createUser(@Body() newUser: CreateUserDto) {
    this.usersService.createUser(newUser)
  }

  @Get('all')
  getAllUsers() {
    return this.usersService.getAllUsers()
  }

  @Delete(':id')
  deleteUserById(@Param('id') id: string) {
    return this.usersService.deleteUser(id)
  }
}
