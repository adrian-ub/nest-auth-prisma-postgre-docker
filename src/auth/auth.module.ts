import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';

import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  imports: [JwtModule.register({ secret: '$up3r$3cr3t' })],
  providers: [AuthService, PrismaService],
  controllers: [AuthController],
  exports: [JwtModule],
})
export class AuthModule {}
