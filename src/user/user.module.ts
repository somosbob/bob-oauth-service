import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UsersService } from './services/user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { CredentialService } from './services/credential.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
  ],
  controllers: [UserController],
  providers: [UsersService, CredentialService],
})
export class UserModule {}
