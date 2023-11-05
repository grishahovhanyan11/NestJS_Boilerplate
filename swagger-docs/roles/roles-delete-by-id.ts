import { applyDecorators } from '@nestjs/common'
import { SwaggerSuccess, SwaggerNotFound } from 'swagger-docs/responses'

export function SwaggerRolesDeleteById() {
  return applyDecorators(SwaggerSuccess(), SwaggerNotFound())
}
