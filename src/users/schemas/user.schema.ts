import { Document } from 'mongoose'
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'

@Schema()
export class User extends Document {
  @Prop()
  username: string

  @Prop()
  password: string
}

export const UserSchema = SchemaFactory.createForClass(User)
