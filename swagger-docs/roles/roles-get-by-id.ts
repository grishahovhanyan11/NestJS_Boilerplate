import { applyDecorators } from '@nestjs/common'
import { ApiOkResponse } from '@nestjs/swagger'
import { SwaggerNotFound } from 'swagger-docs/responses'

export function SwaggerRolesGetById() {
  return applyDecorators(
    ApiOkResponse({
      description: 'Success',
      schema: {
        type: 'object',
        example: {
          id: 1,
          name: 'user'
        }
      }
    }),
    SwaggerNotFound()
  )
}
