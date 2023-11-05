import { Controller, Get } from '@nestjs/common'

import { SwaggerTag, SWAGGER_TAGS } from 'swagger-docs/tags'
import { SwaggerBearerAuth } from 'swagger-docs/bearer-auth'
import { SwaggerUnauthorized, SwaggerForbidden } from 'swagger-docs/responses'
import { SwaggerAdminGetDashboard } from 'swagger-docs/admin'

import { Roles } from 'src/common/decorators/roles.decorator'
import { RequestUser } from 'src/common/decorators/user.decorator'
import { RoleEnum } from 'src/common/enums/role.enum'

import { User } from 'src/database/entities/user.entity'

@SwaggerTag(SWAGGER_TAGS.Admin)
@SwaggerBearerAuth()
@SwaggerUnauthorized()
@SwaggerForbidden()
@Roles(RoleEnum.Admin)
@Controller('admin')
export class AdminController {
  @SwaggerAdminGetDashboard()
  @Get('dashboard')
  getMe(@RequestUser() user: User) {
    return user
  }
}
