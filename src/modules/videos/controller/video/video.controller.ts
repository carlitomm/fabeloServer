import { Controller, Post, Body, Get, Param, Put, Delete, UseInterceptors, UploadedFile, Res, UploadedFiles } from '@nestjs/common';
import { VideoService } from '../../services/video/video.service';
import { Videos } from '../../../model/videos.interface';
import { FileInterceptor, FilesInterceptor} from '@nestjs/platform-express'

@Controller('video')
export class VideoController {

    constructor(private service: VideoService) { }

    @Post()
    add(@Body() data: Videos): any {
        return this.service.save(data)
    }

    @Post(':projectId/uploadVideo')
    @UseInterceptors(FilesInterceptor('files'))
    upload(@Body() data, @UploadedFiles() files): any {
        return this.service.createVideo(files, data.projectId)
    }

    @Get()
    get(): any {
        return this.service.finAll();
    }

    @Get('getVideo/:id/:name') //necesito el nombre específico del video
    getVideo(@Res() res, @Param() params): any {
        return this.service.getVideo(params.id, params.name).pipe(res);
    }

    @Get(':id')             ///me da el nombre específico del video
    getOne(@Param() params): any {
        return this.service.findVideoByproject(params.id);
    }

    @Put(':id')
    update(@Body() data: Videos, @Param() params): any {
        return this.service.update(params.id, data);
    }

    @Delete(':id')
    delete(@Param() params): any {
        return this.service.delete(params.id);
    }

    @Post('deleteVideoFile')
    deleteImageFile(@Body() data) {
        return this.service.deleteVideo(data.id_project, data.video_name)
    }
}
