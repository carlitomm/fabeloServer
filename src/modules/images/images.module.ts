import { Module } from '@nestjs/common';
import { ImagesService } from './services/images/images.service';
import { ImagesController } from './controller/images/images.controller';
import { Images } from './entity/images';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MulterModule } from '@nestjs/platform-express';
import { diskStorage } from 'multer'
import { extname } from 'path';

@Module({
  imports: [TypeOrmModule.forFeature([Images]),
  MulterModule.register({
    storage: diskStorage({
      destination: 'src/assets/temporal',
      filename: (req, files, cb) => {
          //console.log("Esto es el request"+files)
          return cb(null, `${files.originalname}`)
      }
  })
})
],
  providers: [ImagesService],
  controllers: [ImagesController],
  exports: [ImagesService]
})
export class ImagesModule {}
