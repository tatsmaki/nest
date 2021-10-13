import { NestFactory } from '@nestjs/core'
import { AppModule } from '@app/app.module'

const start = async () => {
  const app = await NestFactory.create(AppModule)

  await app.listen(4000)
}

start()
