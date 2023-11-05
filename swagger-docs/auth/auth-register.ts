import { applyDecorators } from '@nestjs/common'
import { ApiBadRequestResponse } from '@nestjs/swagger'
import { ValidationMessages } from 'src/utils/messages'
import { SwaggerSuccess } from 'swagger-docs/responses'

export function SwaggerAuthRegister() {
  return applyDecorators(
    SwaggerSuccess(),
    ApiBadRequestResponse({
      description: 'Bad Request',
      schema: {
        type: 'object',
        example: {
          email: [ValidationMessages.required, ValidationMessages.alreadyExists],
          password: [ValidationMessages.required],
          confirmPassword: [ValidationMessages.alreadyExists],
          role: [ValidationMessages.required]
        }
      }
    })
  )
}
