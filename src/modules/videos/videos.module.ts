import { TypeOrmModule } from '@nestjs/typeorm';
import { Video } from './entity/video';
import { Module } from '@nestjs/common';
import { VideoController } from './controller/video/video.controller';
import { VideoService } from './services/video/video.service';
import { MulterModule } from '@nestjs/platform-express';
import { diskStorage } from 'multer'

@Module({
  imports: [TypeOrmModule.forFeature([Video]),
  MulterModule.register({
    storage: diskStorage({
      destination: 'src/assets/temporal',
      filename: (req, files, cb) => {
          //console.log("Esto es el request de los videos" + files)
          return cb(null, `${files.originalname}`)
      }
  })
})
],
  controllers: [VideoController],
  providers: [VideoService],
  exports: [VideoService]
})
export class VideosModule {}
