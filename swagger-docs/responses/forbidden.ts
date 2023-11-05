import { applyDecorators } from '@nestjs/common'
import { ApiForbiddenResponse } from '@nestjs/swagger'
import { ErrorMessages } from 'src/utils/messages'

export function SwaggerForbidden() {
  return applyDecorators(
    ApiForbiddenResponse({
      description: 'Forbidden',
      schema: {
        type: 'object',
        example: {
          message: ErrorMessages.forbidden403
        }
      }
    })
  )
}
