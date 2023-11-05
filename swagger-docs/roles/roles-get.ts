import { applyDecorators } from '@nestjs/common'
import { ApiOkResponse } from '@nestjs/swagger'

export function SwaggerRolesGet() {
  return applyDecorators(
    ApiOkResponse({
      description: 'Success',
      schema: {
        type: 'array',
        example: [
          {
            id: 1,
            name: 'admin'
          },
          {
            id: 2,
            name: 'user'
          }
        ]
      }
    })
  )
}
