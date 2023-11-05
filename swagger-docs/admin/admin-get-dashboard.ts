import { applyDecorators } from '@nestjs/common'
import { ApiOkResponse } from '@nestjs/swagger'

export function SwaggerAdminGetDashboard() {
  return applyDecorators(
    ApiOkResponse({
      description: 'Success',
      schema: {
        example: {
          id: '1',
          email: 'admin@gmail.com',
          roleId: 1,
          role: {
            id: 1,
            name: 'admin'
          }
        }
      }
    })
  )
}
