import { InjectRepository } from '@nestjs/typeorm';
import { Video } from './../../entity/video';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import * as fs from 'fs'
import * as sharp from 'sharp'

@Injectable()
export class VideoService {

    constructor(@InjectRepository(Video) private readonly element: Repository<Video>) {

    }

    async save(data: any) {
        await this.element.insert(data);
        return data;
    }

    async update(id: number, data: any) {
        await this.element.update(id, data);
    }

    async finAll() {
        return await this.element.find();
    }

    async findOne(id: number) {
        return await this.element.findOne(id);
    }

    async delete(id: number) {
        return await this.element.delete(id);
    }

    createVideo(files: any[], id_project: number) {

        const dir = 'src/assets/uploads/' + id_project + '/LocalVideos';

        files.forEach(element => {
            if (!fs.existsSync(dir))
                fs.mkdirSync(dir);

            fs.copyFileSync('src/assets/temporal/' + element.filename, dir + '/' + element.filename);
            fs.unlinkSync('src/assets/temporal/' + element.filename);
        });

        //console.log(dir)

    }

    deleteVideo(projectId: number, videoName: string) {
        let dir = 'src/assets/uploads/';
        dir += projectId + '/LocalVideos/' + videoName
        //console.log("I want to destroy this video " + projectId + videoName)
        try {
            if (fs.existsSync(dir)) {
                fs.unlinkSync(dir);

                return true;
            } else
                return false;

        } catch (e) {
            return false;
        }

    }

    deleteVideoOfProject(Projectid: number){
        const dir = 'src/assets/uploads/' + Projectid + '/LocalVideos'
        if (fs.existsSync(dir)) {
            const files = fs.readdirSync(dir);
            for (let i = 0; i < files.length; i++) {
                this.deleteVideo(Projectid, files[i]);
                
            }
            fs.rmdirSync(dir);
            //console.log("elimino Video")
            return true;
        } else {
            return false;
        }

    }

    getVideo(projectId: number, videoName: string) {

        let dir = 'src/assets/uploads/';
        dir += projectId + '/LocalVideos/' + videoName
        try {
            if (fs.existsSync(dir)) {
                return this.resize(dir, 'mpge');
            } else{
                return this.resize('src/assets/images/Error.png', 'png');
            }
        } catch (e) {
            return this.resize('src/assets/images/Error.png', 'png');
        }
    }

    findVideoByproject(id){

        const dir = 'src/assets/uploads/' + id + '/LocalVideos'
        if (fs.existsSync(dir)) {
            const files = fs.readdirSync(dir);
            return files;
        } else {
            return 'src/assets/images/Error.png'
        }
    }

    resize(path, format) {
        const readStream = fs.createReadStream(path);
        
        /*let transform = sharp();

        if (format) {
            transform = transform.toFormat(format);
        }*/

        return readStream;
    }

}
