import { Post, Body, Controller, BadRequestException, HttpCode } from '@nestjs/common'
import { DataSource } from 'typeorm'

import { registerUserSchema, loginUserSchema } from 'src/common/joi-schemas/user.schema'
import { LoginUserDto, RegisterUserDto } from 'src/common/dto/user.dto'
import { JoiValidationPipe } from 'src/common/pipes/joi-validation.pipe'
import { Public } from 'src/common/decorators/public.decorator'
import { ValidationMessages } from 'src/utils/messages'

import { SwaggerTag, SWAGGER_TAGS } from 'swagger-docs/tags'
import { SwaggerAuthLogin, SwaggerAuthRegister } from 'swagger-docs/auth'

import { AuthService } from './auth.service'
import { RolesService } from '../roles/roles.service'
import { UsersService } from '../users/users.service'

@SwaggerTag(SWAGGER_TAGS.Auth)
@Public()
@Controller('auth')
export class AuthController {
  constructor(
    private readonly dataSource: DataSource,
    private readonly authService: AuthService,
    private readonly rolesService: RolesService,
    private readonly usersService: UsersService
  ) {}

  @SwaggerAuthRegister()
  @Post('register')
  @HttpCode(200)
  async register(@Body(new JoiValidationPipe(registerUserSchema)) registerUserDto: RegisterUserDto) {
    const queryRunner = this.dataSource.createQueryRunner()
    await queryRunner.startTransaction()

    const { role: roleName, ...createUserInput } = registerUserDto
    const { id: roleId } = await this.rolesService.getByName(roleName)

    const user = await this.usersService.create({ ...createUserInput, roleId }, queryRunner.manager).catch(() => null)

    if (!user) {
      await queryRunner.rollbackTransaction()
      throw new BadRequestException({ email: [ValidationMessages.alreadyExists] })
    }

    await queryRunner.commitTransaction()
    return { message: 'success' }
  }

  @SwaggerAuthLogin()
  @Post('login')
  @HttpCode(200)
  async login(@Body(new JoiValidationPipe(loginUserSchema)) loginUserDto: LoginUserDto) {
    const user = await this.authService.validateUser(loginUserDto.email, loginUserDto.password)

    return this.authService.login(user)
  }
}
