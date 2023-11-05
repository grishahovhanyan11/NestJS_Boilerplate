import { applyDecorators } from '@nestjs/common'
import { ApiOkResponse } from '@nestjs/swagger'

export function SwaggerUsersGetMe() {
  return applyDecorators(
    ApiOkResponse({
      schema: {
        example: {
          id: 1,
          email: 'user@gmail.com',
          roleId: 2,
          role: {
            id: 2,
            name: 'user'
          },
          products: []
        }
      }
    })
  )
}
