import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import getPort from 'get-port'

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(await getPort());
  console.log(await app.getUrl())
}
bootstrap();
