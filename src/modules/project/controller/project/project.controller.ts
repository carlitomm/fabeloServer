/* eslint-disable prefer-const */
import { ProjectService } from './../../services/project/project.service';
import { Controller, Post, Body, Get, Param, Put, Delete } from '@nestjs/common';
import { Project } from '../../../model/project.interface';
import { ImagesService } from '../../../images/services/images/images.service';
import { VideoService } from '../../../videos/services/video/video.service';
import { ProjectEntity } from '../../entity/project.entity';
import { Images } from '../../../images/entity/images';
import { Video } from '../../../videos/entity/video';
import { async } from 'rxjs/internal/scheduler/async';


@Controller('project')
export class ProjectController {

    constructor(private service: ProjectService, 
        private imageService: ImagesService, 
        private videosService: VideoService) { }
        
    @Post()
    async add(@Body() data: ProjectEntity): Promise<any> {
        const id = await this.service.save(data);
        data.id = id.identifiers[0].id;
        if (data.images)
            for (let i = 0; i < data.images.length; i++) {
                const element = data.images[i];
                let image: Images = element;
                image.project = data;
                this.imageService.save(image);
            }
        if (data.videos)
            for (let i = 0; i < data.videos.length; i++) {
                const element = data.videos[i];
                let video: Video = element;
                video.project = data;
                this.videosService.save(video);
            }
        return id;
    }

    @Get()
    get(): any {
        return this.service.finAll();
    }

    @Get(':id')
    getOne(@Param() params): any {
        return this.service.findOne(params.id);
    }

    @Put(':id')
    async update(@Body() data: ProjectEntity, @Param() params): Promise<any> {
        
        const rem = await this.service.deleteOnUpgrade(params.id);
        const id = await this.service.save(data);
        data.id = id.identifiers[0].id;
        if (data.images)
            for (let i = 0; i < data.images.length; i++) {
                const element = data.images[i];
                let image: Images = element;
                image.project = data;
                this.imageService.save(image);
            }
 
        if (data.videos)
            for (let i = 0; i < data.videos.length; i++) {
                const element = data.videos[i];
                let video: Video = element;
                video.project = data;
                this.videosService.save(video);
            }
       
        return id
    }

    @Delete(':id')
    delete(@Param() params): any {
        return this.service.delete(params.id);
    }

}
