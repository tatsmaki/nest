import { Module } from '@nestjs/common'
import { UsersController } from './controller'
import { UsersService } from './service'
import { UserModule } from './user/module'

@Module({
  imports: [UserModule],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
