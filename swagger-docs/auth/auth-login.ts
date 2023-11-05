import { applyDecorators } from '@nestjs/common'
import { ApiBadRequestResponse, ApiOkResponse } from '@nestjs/swagger'
import { ValidationMessages } from 'src/utils/messages'

export function SwaggerAuthLogin() {
  return applyDecorators(
    ApiOkResponse({
      description: 'Success',
      schema: {
        type: 'object',
        properties: {
          accessToken: {
            type: 'string',
            example:
              'eyJhbGciOiJIUzI1NiIsInR5cCI6Ik.eyJkYXRhIjpoiMSJ9LCJpYXQiOjE2Njk4Nzc1NzYsImV4cCI6MTY2OTg4MTE3Nn0.WnSAh0lD30O44TBMa_UoDTMi2ENneNxWXc'
          }
        }
      }
    }),
    ApiBadRequestResponse({
      description: 'Bad Request',
      schema: {
        type: 'object',
        example: {
          email: [ValidationMessages.required],
          password: [ValidationMessages.required]
        }
      }
    })
  )
}
