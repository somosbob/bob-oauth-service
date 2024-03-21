import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { User } from './user.entity';

@Entity('credencial')
export class Credential {
    @PrimaryGeneratedColumn({ name: 'idcredencial' })
    idCredential: number;

    @Column({ name: 'email', length: 200 })
    email: string;

    @Column({ name: 'pwd', length: 256 })
    pwd: string;

    @Column({ name: 'usuario_idusuario' })
    usuarioIdUsuario: number;

    @ManyToOne(() => User)
    @JoinColumn({ name: 'usuario_idusuario' })
    user: User;
}
