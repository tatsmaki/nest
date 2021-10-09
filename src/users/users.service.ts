import { Model } from 'mongoose'
import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { User } from './schemas/user.schema'
import { CreateUserDto, DeleteUserDto } from './schemas/user.dto'

@Injectable()
export class UsersService {
  private userModel: Model<User>

  constructor(@InjectModel(User.name) userModel: Model<User>) {
    this.userModel = userModel
  }

  createUser = async (newUser: CreateUserDto) => {
    const createdUser = new this.userModel(newUser)

    return createdUser.save()
  }

  getAllUsers = async () => {
    return this.userModel.find().exec()
  }

  deleteUser = async (id: DeleteUserDto) => {
    return this.userModel.deleteOne({ id })
  }
}
