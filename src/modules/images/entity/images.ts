import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { ProjectEntity } from '../../project/entity/project.entity';

@Entity('images')
export class Images {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nombre: string;

    @ManyToOne(type => ProjectEntity, project => project.images, { onDelete: 'CASCADE' })
    project: ProjectEntity;
}
