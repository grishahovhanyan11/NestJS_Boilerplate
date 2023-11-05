import { applyDecorators } from '@nestjs/common'
import { ApiBearerAuth } from '@nestjs/swagger'

export function SwaggerBearerAuth() {
  return applyDecorators(ApiBearerAuth())
}
