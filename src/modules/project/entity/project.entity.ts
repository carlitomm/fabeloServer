import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Video } from '../../videos/entity/video';
import { Images } from '../../images/entity/images';

@Entity('proyecto')
export class ProjectEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    titulo: string;

    @Column()
    fecha: Date;

    @Column({ length: "2048"})
    descripcion: string;

    @Column()
    dimensiones: string;

    @Column()
    material: string;

    @OneToMany(type => Video, video => video.project)
    videos: Video[];

    @OneToMany(type => Images, images => images.project)
    images: Images[];

    @Column()
    order: number;

    @Column()
    videoDimensions: string;
}

