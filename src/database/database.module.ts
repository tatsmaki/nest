import { MongooseModule } from '@nestjs/mongoose'

export const DatabaseModule = MongooseModule.forRoot(process.env.DATABASE)
