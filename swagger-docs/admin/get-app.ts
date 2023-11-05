import { applyDecorators } from '@nestjs/common'
import { ApiOkResponse } from '@nestjs/swagger'

export function SwaggerGetApp() {
  return applyDecorators(
    ApiOkResponse({
      schema: {
        type: 'object',
        properties: {
          hello: {
            type: 'string',
            example: 'world'
          }
        }
      }
    })
  )
}
