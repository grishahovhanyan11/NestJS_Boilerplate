import { applyDecorators } from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'

export const SWAGGER_TAGS = {
  App: 'App',
  Roles: 'Roles',
  Auth: 'Auth',
  Users: 'Users',
  Admin: 'Admin'
}

export function SwaggerTag(tag: string) {
  return applyDecorators(ApiTags(tag))
}
