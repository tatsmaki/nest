import { Model } from 'mongoose'
import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { User } from './schemas/user.schema'
import { CreateUserDto } from './schemas/user.dto'

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  createUser = (newUser: CreateUserDto) => {
    const createdUser = new this.userModel(newUser)

    return createdUser.save()
  }

  getAllUsers = () => {
    return this.userModel.find().exec()
  }

  deleteUser = (id: string) => {
    return this.userModel.deleteOne({ _id: id })
  }

  findOne = (username: string) => {
    return this.userModel.findOne({ username })
  }
}
