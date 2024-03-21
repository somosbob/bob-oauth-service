import { Injectable, NotFoundException } from '@nestjs/common';

import * as bcrypt from 'bcrypt';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../entities/user.entity';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User) private userRepo: Repository<User>,
    ) {}

    async findOne(id: number) {
        const user = await this.userRepo.findOne({ where: { id: id }});
        if (!user) {
            throw new NotFoundException(`User #${id} not found`);
        }
        return user;
    }

    

    async create(data: CreateUserDto) {
        const newUser = this.userRepo.create(data);
        // const hashPassword = await bcrypt.hash(newUser.password, 10);
        // newUser.password = hashPassword;
        // if (data.customerId) {
        //     const customer = await this.customersService.findOne(data.customerId);
        //     newUser.customer = customer;
        // }
        return this.userRepo.save(newUser);
    }

    async update(id: number, changes: UpdateUserDto) {
        const user = await this.findOne(id);
        this.userRepo.merge(user, changes);
        return this.userRepo.save(user);
    }

    remove(id: number) {
        return this.userRepo.delete(id);
    }

}
