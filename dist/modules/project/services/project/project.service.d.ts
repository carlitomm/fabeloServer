import { ProjectEntity } from './../../entity/project.entity';
import { Repository } from 'typeorm';
import { Project } from '../../../model/project.interface';
import { ImagesService } from '../../../images/services/images/images.service';
import { Images } from '../../../images/entity/images';
import { VideoService } from '../../../videos/services/video/video.service';
export declare class ProjectService {
    private readonly element;
    private imageService;
    private videoService;
    constructor(element: Repository<ProjectEntity>, imageService: ImagesService, videoService: VideoService);
    images: Promise<Images[]>;
    save(data: Project): Promise<import("typeorm").InsertResult>;
    update(id: number, data: ProjectEntity): Promise<import("typeorm").UpdateResult>;
    finAll(): Promise<ProjectEntity[]>;
    findOne(id: number): Promise<ProjectEntity>;
    delete(id: number): Promise<import("typeorm").DeleteResult>;
    deleteOnUpgrade(id: number): Promise<import("typeorm").DeleteResult>;
}
