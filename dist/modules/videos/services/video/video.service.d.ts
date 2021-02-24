/// <reference types="node" />
import { Video } from './../../entity/video';
import { Repository } from 'typeorm';
import * as fs from 'fs';
export declare class VideoService {
    private readonly element;
    constructor(element: Repository<Video>);
    save(data: any): Promise<any>;
    update(id: number, data: any): Promise<void>;
    finAll(): Promise<Video[]>;
    findOne(id: number): Promise<Video>;
    delete(id: number): Promise<import("typeorm").DeleteResult>;
    createVideo(files: any[], id_project: number): void;
    deleteVideo(projectId: number, videoName: string): boolean;
    deleteVideoOfProject(Projectid: number): boolean;
    getVideo(projectId: number, videoName: string): fs.ReadStream;
    findVideoByproject(id: any): string[] | "src/assets/images/Error.png";
    resize(path: any, format: any): fs.ReadStream;
}
