import { ProjectService } from './../../services/project/project.service';
import { ImagesService } from '../../../images/services/images/images.service';
import { VideoService } from '../../../videos/services/video/video.service';
import { ProjectEntity } from '../../entity/project.entity';
export declare class ProjectController {
    private service;
    private imageService;
    private videosService;
    constructor(service: ProjectService, imageService: ImagesService, videosService: VideoService);
    add(data: ProjectEntity): Promise<any>;
    get(): any;
    getOne(params: any): any;
    update(data: ProjectEntity, params: any): Promise<any>;
    delete(params: any): any;
}
