import { TypeOrmModule } from '@nestjs/typeorm'
import { Module } from '@nestjs/common'

import { UsersController } from './users.controller'
import { UsersService } from './users.service'

import { User } from 'src/database/entities/user.entity'

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService]
})
export class UsersModule {}
