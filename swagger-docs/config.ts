import { DocumentBuilder, SwaggerCustomOptions } from '@nestjs/swagger'

export const swaggerConfigs = new DocumentBuilder()
  .setTitle('NestJS Boilerplate')
  .setDescription('NestJS Boilerplate')
  .setVersion('1.0')
  .addServer(process.env.BASE_URL)
  .addBearerAuth({ type: 'http', scheme: 'bearer', bearerFormat: 'JWT', in: 'header' })
  .build()

export const swaggerOptions: SwaggerCustomOptions = {
  swaggerOptions: {
    persistAuthorization: true,
    requestInterceptor: (req) => {
      req.credentials = 'include'
      return req
    }
  },
  customSiteTitle: 'NestJS - Swagger'
}
