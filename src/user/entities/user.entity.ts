import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Rol } from './rol.entity';

@Entity('usuario')
export class User {
    @PrimaryGeneratedColumn({ name: 'idusuario' })
    id: number;

    @Column({ name: 'username', length: 50 })
    username: string;

    @Column({ name: 'nombre', length: 150 })
    firstName: string;

    @Column({ name: 'apellido', length: 150 })
    lastName: string;

    @Column({ name: 'dni', length: 20 })
    documentNumber: string;

    @Column({ name: 'imagen', length: 200, nullable: true })
    profileImg: string;

    @Column({ name: 'estado', length: 50, default: 'active' })
    state: string;

    @Column({ name: 'verificado', default: false })
    verificado: boolean;

    @Column({ name: 'rol_idrol' })
    rolIdRol: number;

    @ManyToOne(() => Rol)
    @JoinColumn({ name: 'rol_idrol' })
    rol: Rol;

    @Column({ name: 'timestamp', default: () => 'now()' })
    timestamp: Date;

    @Column({ name: 'ciudad', length: 100 })
    ciudad: string;

    @Column({ name: 'region', length: 100 })
    region: string;

    @Column({ name: 'pais', length: 100 })
    pais: string;

    @Column({ name: 'ip', length: 20 })
    ip: string;

    @Column({ name: 'suscribe_email_notification', default: true })
    suscribeEmailNotification: boolean;

    @Column({ name: 'registro_intereses', default: false })
    registroIntereses: boolean;

    @Column({ name: 'celular', type: 'bigint', nullable: true })
    celular: number;

    @Column({ name: 'intereses', type: 'varchar', array: true, length: 100, nullable: true })
    intereses: string[];

    @Column({ name: 'fecha_ultimo_login', type: 'date', nullable: true })
    fechaUltimoLogin: Date;
}
