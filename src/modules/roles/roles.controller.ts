import {
  Controller,
  Get,
  Post,
  Delete,
  Body,
  Param,
  HttpCode,
  BadRequestException,
  NotFoundException
} from '@nestjs/common'
import { Public } from 'src/common/decorators/public.decorator'
import { ErrorMessages, ValidationMessages } from 'src/utils/messages'

import { CreateRoleDto } from 'src/common/dto/role.dto'
import { SwaggerTag, SWAGGER_TAGS } from 'swagger-docs/tags'
import { SwaggerRolesGet, SwaggerRolesPost, SwaggerRolesGetById, SwaggerRolesDeleteById } from 'swagger-docs/roles'

import { RolesService } from './roles.service'

@SwaggerTag(SWAGGER_TAGS.Roles)
@Public()
@Controller('roles')
export class RolesController {
  constructor(private readonly rolesService: RolesService) {}

  @SwaggerRolesGet()
  @Get()
  async index() {
    return await this.rolesService.getAll()
  }

  @SwaggerRolesPost()
  @Post()
  @HttpCode(201)
  async create(@Body() createRoleDto: CreateRoleDto) {
    const role = await this.rolesService.getByName(createRoleDto.name)
    if (role) {
      throw new BadRequestException({ name: [ValidationMessages.alreadyExists] })
    }

    return await this.rolesService.create(createRoleDto)
  }

  @SwaggerRolesGetById()
  @Get(':id')
  async find(@Param('id') id: number) {
    const role = await this.rolesService.getById(id)
    if (!role) {
      throw new NotFoundException({ message: ErrorMessages.notFound404 })
    }

    return role
  }

  @SwaggerRolesDeleteById()
  @Delete(':id')
  async delete(@Param('id') id: number) {
    const queryResponse = await this.rolesService.deleteById(id)
    if (queryResponse.affected === 0) {
      throw new NotFoundException({ message: ErrorMessages.notFound404 })
    }

    return { message: 'success' }
  }
}
