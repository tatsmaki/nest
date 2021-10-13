import { NestFactory } from '@nestjs/core'
import { AppModule } from '@app/app.module'

const start = async () => {
  const app = await NestFactory.create(AppModule)

  app.enableCors({
    // origin: ['http://localhost'],
    origin: true,
    // methods: ['GET', 'POST', 'DELETE'],
    // allowedHeaders: ['Access-Control-Allow-Origin', 'Content-Type'],
  })
  await app.listen(4000)
}

start()
