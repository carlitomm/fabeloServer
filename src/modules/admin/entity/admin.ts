import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('admin')
export class Admin {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    age: number;

    @Column()
    email: string;

    @Column()
    address: string;

    @Column({ length: "2048"})
    about: string;

    @Column()
    phone: string;

    @Column()
    cellPhone: string;

    @Column()
    allias: string;

    @Column()
    username: string;

    @Column()
    password: string;
}
