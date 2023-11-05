import { ApiProperty } from '@nestjs/swagger'

export class RegisterUserDto {
  @ApiProperty({ example: 'example@mail.com' })
  email: string

  @ApiProperty({ example: 'qwerty1234' })
  password: string

  @ApiProperty({ example: 'qwerty1234' })
  confirmPassword: string

  @ApiProperty({ example: 'user' })
  role: string
}

export class CreateUserDto {
  email: string
  password: string
  roleId: number
}

export class LoginUserDto {
  @ApiProperty({ example: 'example@mail.com' })
  email: string

  @ApiProperty({ example: 'qwerty1234' })
  password: string
}
