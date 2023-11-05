import { Controller, Get } from '@nestjs/common'

import { SwaggerTag, SWAGGER_TAGS } from 'swagger-docs/tags'
import { SwaggerGetApp } from 'swagger-docs/admin'

import { Public } from 'src/common/decorators/public.decorator'

@SwaggerTag(SWAGGER_TAGS.App)
@Public()
@Controller()
export class AppController {
  @SwaggerGetApp()
  @Get()
  index() {
    return { hello: 'world' }
  }
}
