import { ProjectEntity } from './../../entity/project.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { Project } from '../../../model/project.interface';
import { ImagesService } from '../../../images/services/images/images.service';
import { Images } from '../../../images/entity/images';
import { Video } from '../../../videos/entity/video';
import { VideoService } from '../../../videos/services/video/video.service';

@Injectable()
export class ProjectService {

    constructor(@InjectRepository(ProjectEntity)
    private readonly element: Repository<ProjectEntity>,
        private imageService: ImagesService,
        private videoService: VideoService) { }

    images: Promise<Images[]>

    async save(data: Project) {
        return await this.element.insert(data);
    }

    async update(id: number, data: ProjectEntity) {
        return await this.element.update(id, data)  
     
    }

    async finAll() {
        return await this.element.find({ relations: ['videos', 'images'], order: {order: 'ASC'} });
    }

    async findOne(id: number) {
        return await this.element.findOne(id, { relations: ['videos', 'images'] });
    }

    async delete(id: number) {
        this.videoService.deleteVideoOfProject(id);
        this.imageService.deleteImagesOfProject(id);
        return await this.element.delete(id);
    }

    async deleteOnUpgrade(id: number) {
        return await this.element.delete(id);
    }

}
