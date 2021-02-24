import { VideoService } from '../../services/video/video.service';
import { Videos } from '../../../model/videos.interface';
export declare class VideoController {
    private service;
    constructor(service: VideoService);
    add(data: Videos): any;
    upload(data: any, files: any): any;
    get(): any;
    getVideo(res: any, params: any): any;
    getOne(params: any): any;
    update(data: Videos, params: any): any;
    delete(params: any): any;
    deleteImageFile(data: any): boolean;
}
