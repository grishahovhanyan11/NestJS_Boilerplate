import { applyDecorators } from '@nestjs/common'
import { ApiNotFoundResponse } from '@nestjs/swagger'
import { ErrorMessages } from 'src/utils/messages'

export function SwaggerNotFound() {
  return applyDecorators(
    ApiNotFoundResponse({
      description: 'Not Found',
      schema: {
        type: 'object',
        example: {
          message: ErrorMessages.notFound404
        }
      }
    })
  )
}
