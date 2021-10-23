import { config } from 'dotenv'
config()
import { NestFactory } from '@nestjs/core'
import { AppModule } from '@app/app.module'

const start = async () => {
  const app = await NestFactory.create(AppModule)

  app.enableCors({ origin: true })
  await app.listen(process.env.PORT)
}

start()
