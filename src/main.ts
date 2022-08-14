import { NestFactory } from '@nestjs/core'
import { AppModule } from './App.Module'
import { middleware as expressCtx } from 'express-ctx'

/**
 * @todo swagger
 */
async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  /**
   * Swagger
   */

  app.use(expressCtx)
  await app.listen(3000)

  /**
   * @todo
   * logger
   */
}

bootstrap()
