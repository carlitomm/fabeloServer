import { ImagesService } from './../../services/images/images.service';
import { Images } from 'src/modules/model/images.interface';
export declare class ImagesController {
    private service;
    constructor(service: ImagesService);
    add(data: Images): any;
    upload(data: any, files: any): any;
    get(): any;
    getImage(res: any, params: any): any;
    getOne(params: any): any;
    update(data: Images, params: any): any;
    delete(params: any): any;
    deleteImageFile(data: any): boolean;
}
