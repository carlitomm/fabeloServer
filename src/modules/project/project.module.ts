import { TypeOrmModule } from '@nestjs/typeorm';
import { ProjectEntity } from './entity/project.entity';
import { Module } from '@nestjs/common';
import { ProjectController } from './controller/project/project.controller';
import { ProjectService } from './services/project/project.service';
import { ImagesService } from '../images/services/images/images.service';
import { VideoService } from '../videos/services/video/video.service';
import { ImagesModule } from '../images/images.module';
import { VideosModule } from '../videos/videos.module';

@Module({
  imports: [TypeOrmModule.forFeature([ProjectEntity]),ImagesModule,VideosModule],
  controllers: [ProjectController],
  providers: [ProjectService]
})
export class ProjectModule {}
