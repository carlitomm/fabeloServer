import { Images } from './../../entity/images';
import { Repository } from 'typeorm';
export declare class ImagesService {
    private readonly element;
    constructor(element: Repository<Images>);
    save(data: any): Promise<any>;
    update(id: number, data: any): Promise<void>;
    finAll(): Promise<Images[]>;
    findOne(id: number): Promise<Images>;
    delete(id: number): Promise<import("typeorm").DeleteResult>;
    createImage(files: any[], id_project: number): void;
    findImageByproject(id: any): "src/assets/images/Error.png" | {
        id: any;
        name: string[];
    };
    getImage(projectId: number, imageName: string): any;
    deleteImage(projectId: number, imageName: string): boolean;
    deleteImagesOfProject(Projectid: number): boolean;
    getImageProcess(name: any, id_ad: any, id_client: any, type: any, id_store: any): {
        directory: string;
        width: number;
        heigth: number;
    };
    resize(path: any, format: any): any;
}
