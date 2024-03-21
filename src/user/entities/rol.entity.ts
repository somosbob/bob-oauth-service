import { Exclude } from 'class-transformer';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('rol')
export class Rol {
    @PrimaryGeneratedColumn({ name: 'idrol' })
    idrol: number;

    @Column({ name: 'nombre', length: 50 })
    name: string;

    @Exclude()
    @Column({ name: 'descr', length: 150 })
    description: string;

}
