import { MongooseModule } from '@nestjs/mongoose'

export const DatabaseModule = MongooseModule.forRoot('mongodb://localhost/nest')
