import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne } from 'typeorm';
import { ProjectEntity } from '../../project/entity/project.entity';

@Entity('video')
export class Video {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nombre: string;

    @Column()
    url: string;

    @ManyToOne(type => ProjectEntity, project => project.videos, {onDelete:'CASCADE'})
    project: ProjectEntity;

}
