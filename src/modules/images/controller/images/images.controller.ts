import { ImagesService } from './../../services/images/images.service';

import { Controller, Post, Body, Get, Param, Put, Delete, UseInterceptors, UploadedFile, Res, UploadedFiles } from '@nestjs/common';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express'
import { diskStorage } from 'multer'
import { Images } from 'src/modules/model/images.interface';
import { extname } from 'path';

@Controller('images')
export class ImagesController {
    constructor(private service: ImagesService) { }

    @Post()
    add(@Body() data: Images): any {
        return this.service.save(data)
    }

    @Post(':projectId/uploadImage')
    /* @UseInterceptors(FileInterceptor('files',
        {
            storage: diskStorage({
                destination: 'src/assets/temporal',
                filename: (req, files, cb) => {
                    console.log("Esto es el requesttttttt"+req)
                    const randomName = 'img_'+ Date.now().toLocaleString()
                    return cb(null, `${randomName}${extname(files.originalname)}`)
                }
            })
        }
    )
    ) */
    @UseInterceptors(FilesInterceptor('files'))
    upload(@Body() data, @UploadedFiles() files): any {
        return this.service.createImage(files, data.projectId)
    }

    @Get()
    get(): any {
        return this.service.finAll();
    }

    @Get('getImage/:id/:name') //necesito el nombre específico de la imagen
    getImage(@Res() res, @Param() params): any {
        return this.service.getImage(params.id, params.name).pipe(res);
    }

    @Get(':id')   //me da el nombre específico de la imagen
    getOne(@Param() params): any {
        return this.service.findImageByproject(params.id);
    }

    @Put(':id')
    update(@Body() data: Images, @Param() params): any {
        return this.service.update(params.id, data);
    }

    @Delete(':id')
    delete(@Param() params): any {
        return this.service.delete(params.id);
    }

    @Post('deleteImageFile')
    deleteImageFile(@Body() data) {
        return this.service.deleteImage(data.id_project, data.image_name)
    }
}
