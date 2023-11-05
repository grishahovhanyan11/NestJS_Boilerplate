import { Get, Controller } from '@nestjs/common'

import { SwaggerTag, SWAGGER_TAGS } from 'swagger-docs/tags'
import { SwaggerBearerAuth } from 'swagger-docs/bearer-auth'
import { SwaggerUnauthorized } from 'swagger-docs/responses'
import { SwaggerUsersGetMe } from 'swagger-docs/users'

import { RequestUser } from 'src/common/decorators/user.decorator'
import { User } from 'src/database/entities/user.entity'

@SwaggerTag(SWAGGER_TAGS.Users)
@SwaggerBearerAuth()
@SwaggerUnauthorized()
@Controller('users')
export class UsersController {
  @SwaggerUsersGetMe()
  @Get('me')
  getMe(@RequestUser() user: User) {
    return user
  }
}
