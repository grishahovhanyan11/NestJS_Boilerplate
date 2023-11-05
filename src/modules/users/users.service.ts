import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { EntityManager, Repository } from 'typeorm'

import { ICreateUserInput } from 'src/common/interfaces/user.interface'

import { User } from 'src/database/entities/user.entity'

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>
  ) {}

  async create(createUserInput: ICreateUserInput, entityManager: EntityManager): Promise<User> {
    const newUser = this.usersRepository.create(createUserInput)
    return await entityManager.save(newUser)
  }

  async getByEmail(email: string): Promise<User | null> {
    return await this.usersRepository.findOne({
      where: { email },
      relations: ['role', 'products']
    })
  }

  async getById(userId: number): Promise<User | null> {
    return await this.usersRepository.findOne({
      where: { id: userId },
      relations: ['role', 'products']
    })
  }
}
