import { ApiProperty } from '@nestjs/swagger'

export class CreateRoleDto {
  @ApiProperty({ example: 'company' })
  name: string
}
