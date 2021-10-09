import { MongooseModule } from '@nestjs/mongoose'
import { UserSchema } from './schema'

export const UserModule = MongooseModule.forFeature([
  {
    name: 'User',
    schema: UserSchema,
  },
])
