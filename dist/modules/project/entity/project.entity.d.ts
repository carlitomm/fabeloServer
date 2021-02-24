import { Video } from '../../videos/entity/video';
import { Images } from '../../images/entity/images';
export declare class ProjectEntity {
    id: number;
    titulo: string;
    fecha: Date;
    descripcion: string;
    dimensiones: string;
    material: string;
    videos: Video[];
    images: Images[];
    order: number;
    videoDimensions: string;
}
