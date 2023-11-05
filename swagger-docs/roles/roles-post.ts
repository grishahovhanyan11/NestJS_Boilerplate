import { applyDecorators } from '@nestjs/common'
import { ApiBadRequestResponse, ApiCreatedResponse } from '@nestjs/swagger'

export function SwaggerRolesPost() {
  return applyDecorators(
    ApiCreatedResponse({
      description: 'Created',
      schema: {
        type: 'object',
        example: {
          id: 3,
          name: 'company'
        }
      }
    }),
    ApiBadRequestResponse({
      description: 'Bad Request',
      schema: {
        type: 'object',
        example: {
          statusCode: 400,
          message: 'Role with such name already exist',
          error: 'Bad Request'
        }
      }
    })
  )
}
