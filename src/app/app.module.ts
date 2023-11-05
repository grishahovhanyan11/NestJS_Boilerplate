import { TypeOrmModule } from '@nestjs/typeorm'
import { ConfigModule } from '@nestjs/config'
import { Module } from '@nestjs/common'
import { APP_GUARD } from '@nestjs/core'
import { DatabaseConfigs } from '../database/config'

import { JwtAuthGuard } from 'src/common/guards/jwt-auth.guard'
import { RolesGuard } from 'src/common/guards/roles.guard'
import { AppController } from './app.controller'

import { RolesModule } from '../modules/roles/roles.module'
import { AuthModule } from '../modules/auth/auth.module'
import { UsersModule } from '../modules/users/users.module'
import { AdminModule } from '../modules/admin/admin.module'

@Module({
  imports: [
    TypeOrmModule.forRoot(DatabaseConfigs),
    ConfigModule.forRoot({ envFilePath: '.env', isGlobal: true }),
    RolesModule,
    AuthModule,
    UsersModule,
    AdminModule
  ],
  controllers: [AppController],
  providers: [
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard
    },
    {
      provide: APP_GUARD,
      useClass: RolesGuard
    }
  ]
})
export class AppModule {}
