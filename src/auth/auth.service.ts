import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/user/entities/user.entity';
import { PayloadToken } from './models/token.model';
import { CredentialService } from 'src/user/services/credential.service';

@Injectable()
export class AuthService {
    constructor(
        private credentialService: CredentialService,
        private jwtService: JwtService,
    ) {}

    async validateUser(email: string, password: string) {
        const credential = await this.credentialService.findByEmail(email);
        if (credential) {
            const isMatch = await bcrypt.compare(password, credential.pwd);
            if (isMatch) {
                const { pwd, ...rta } = credential;
                return rta;
            }
        }
        return null;
    }

    generateJWT(user: User) {
        const payload: PayloadToken = { role: user.rol?.name, sub: user.id };
        return {
            access_token: this.jwtService.sign(payload),
            user,
        };
    }
}
