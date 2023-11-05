import { InjectRepository } from '@nestjs/typeorm'
import { Injectable } from '@nestjs/common'
import { Repository } from 'typeorm'

import { CreateRoleDto } from 'src/common/dto/role.dto'
import { Role } from 'src/database/entities/role.entity'

@Injectable()
export class RolesService {
  constructor(
    @InjectRepository(Role)
    private readonly rolesRepository: Repository<Role>
  ) {}

  async getAll(): Promise<Role[]> {
    return await this.rolesRepository.find()
  }

  async create(createRoleDto: CreateRoleDto): Promise<Role> {
    return await this.rolesRepository.save(createRoleDto)
  }

  async getById(id: number): Promise<Role | null> {
    return await this.rolesRepository.findOneBy({ id })
  }

  async getByName(name: string): Promise<Role | null> {
    return await this.rolesRepository.findOneBy({ name })
  }

  async deleteById(id: number) {
    return await this.rolesRepository.delete(id)
  }
}
