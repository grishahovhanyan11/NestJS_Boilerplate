import { BadRequestException, Injectable } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'

import { HashService } from 'src/utils/hash.service'
import { UsersService } from '../users/users.service'
import { ValidationMessages } from 'src/utils/messages'

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService, private readonly usersService: UsersService) {}

  async validateUser(email: string, pass: string): Promise<any> {
    const user = await this.usersService.getByEmail(email)
    if (user && HashService.compare(pass, user.password)) {
      return user
    }

    throw new BadRequestException({ message: ValidationMessages.invalidEmailPassword })
  }

  async login(user: any) {
    return {
      accessToken: this.jwtService.sign({ userId: user.id })
    }
  }
}
