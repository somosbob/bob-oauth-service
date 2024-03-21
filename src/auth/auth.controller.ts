import { Controller, Post, UseGuards, Req } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { Request } from 'express';
import { User } from 'src/user/entities/user.entity';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}
    @UseGuards(AuthGuard('local'))
    @Post('login')
    login(@Req() req: Request) {
        // const user = req.user as User;
        // return this.authService.generateJWT(user);
    }
}
