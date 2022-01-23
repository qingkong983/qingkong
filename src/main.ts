import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { prepareInit } from './utils/prepareInit'

async function bootstrap() {
  prepareInit()
  const { AppModule } = await import('./app.module')
  const app = await NestFactory.create(AppModule)
  app.use(function (req, res, next) {
    const old_url = req.url
    if (old_url.includes('/api/cov')) {
      req.url = old_url.replace('/api/cov', '')
      console.log('foo: ' + old_url + ' -> ' + req.url)
    }
    next()
  })
  app.enableCors()
  await app.listen(8080)
}
bootstrap()
