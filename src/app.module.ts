import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProjectModule } from './modules/project/project.module';
import { ModelModule } from './modules/model/model.module';
import { DatabaseModule } from './modules/database/database.module';
import { ImagesModule } from './modules/images/images.module';
import { VideosModule } from './modules/videos/videos.module';
import { AdminModule } from './modules/admin/admin.module';

@Module({
  imports: [
    ProjectModule, 
    ModelModule, 
    DatabaseModule, 
    ImagesModule, 
    VideosModule, 
    AdminModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
