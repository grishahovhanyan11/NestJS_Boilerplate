import { ConfigModule, ConfigService } from '@nestjs/config'
import { PassportModule } from '@nestjs/passport'
import { Module } from '@nestjs/common'
import { JwtModule } from '@nestjs/jwt'

import { AuthController } from './auth.controller'
import { AuthService } from './auth.service'

import { JwtStrategy } from './strategies/jwt.strategy'

import { RolesModule } from '../roles/roles.module'
import { UsersModule } from '../users/users.module'

@Module({
  imports: [
    PassportModule,
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        secret: configService.get('JWT_SECRET'),
        signOptions: {
          expiresIn: configService.get('JWT_EXPIRATION_TIME') + 's'
        }
      })
    }),
    ConfigModule,
    RolesModule,
    UsersModule
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy]
})
export class AuthModule {}
