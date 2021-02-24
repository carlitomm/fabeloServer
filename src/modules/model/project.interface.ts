import { Images } from "./images.interface";
import { Videos } from "./videos.interface";

export interface Project {
    id: number;
    titulo: string;
    fecha: Date;
    descripcion: string;
    dimensiones: string;
    material: string;
    images:Images[];
    videos:Videos[];
    order: number;
    videoDimensions: string;
}
