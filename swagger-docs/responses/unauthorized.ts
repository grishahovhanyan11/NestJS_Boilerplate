import { applyDecorators } from '@nestjs/common'
import { ApiUnauthorizedResponse } from '@nestjs/swagger'
import { ErrorMessages } from 'src/utils/messages'

export function SwaggerUnauthorized() {
  return applyDecorators(
    ApiUnauthorizedResponse({
      description: 'Unauthorized',
      schema: {
        type: 'object',
        example: {
          message: ErrorMessages.unauthorized401
        }
      }
    })
  )
}
