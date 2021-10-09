import { Module } from '@nestjs/common'
import { UsersModule } from '@users/module'
import { AppController } from './controller'
import { AppService } from './service'
import { DatabaseModule } from '@database/module'

@Module({
  imports: [DatabaseModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
