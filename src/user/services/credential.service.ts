import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Credential } from '../entities/credential.entity';

@Injectable()
export class CredentialService {
    constructor(@InjectRepository(Credential) private credentialRepo: Repository<Credential>) {}

    findByEmail(email: string) {
        return this.credentialRepo.findOne({ where: { email } });
    }
}
