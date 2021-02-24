"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("@nestjs/typeorm");
const video_1 = require("./../../entity/video");
const common_1 = require("@nestjs/common");
const typeorm_2 = require("typeorm");
const fs = require("fs");
let VideoService = class VideoService {
    constructor(element) {
        this.element = element;
    }
    async save(data) {
        await this.element.insert(data);
        return data;
    }
    async update(id, data) {
        await this.element.update(id, data);
    }
    async finAll() {
        return await this.element.find();
    }
    async findOne(id) {
        return await this.element.findOne(id);
    }
    async delete(id) {
        return await this.element.delete(id);
    }
    createVideo(files, id_project) {
        const dir = 'src/assets/uploads/' + id_project + '/LocalVideos';
        files.forEach(element => {
            if (!fs.existsSync(dir))
                fs.mkdirSync(dir);
            fs.copyFileSync('src/assets/temporal/' + element.filename, dir + '/' + element.filename);
            fs.unlinkSync('src/assets/temporal/' + element.filename);
        });
    }
    deleteVideo(projectId, videoName) {
        let dir = 'src/assets/uploads/';
        dir += projectId + '/LocalVideos/' + videoName;
        try {
            if (fs.existsSync(dir)) {
                fs.unlinkSync(dir);
                return true;
            }
            else
                return false;
        }
        catch (e) {
            return false;
        }
    }
    deleteVideoOfProject(Projectid) {
        const dir = 'src/assets/uploads/' + Projectid + '/LocalVideos';
        if (fs.existsSync(dir)) {
            const files = fs.readdirSync(dir);
            for (let i = 0; i < files.length; i++) {
                this.deleteVideo(Projectid, files[i]);
            }
            fs.rmdirSync(dir);
            return true;
        }
        else {
            return false;
        }
    }
    getVideo(projectId, videoName) {
        let dir = 'src/assets/uploads/';
        dir += projectId + '/LocalVideos/' + videoName;
        try {
            if (fs.existsSync(dir)) {
                return this.resize(dir, 'mpge');
            }
            else {
                return this.resize('src/assets/images/Error.png', 'png');
            }
        }
        catch (e) {
            return this.resize('src/assets/images/Error.png', 'png');
        }
    }
    findVideoByproject(id) {
        const dir = 'src/assets/uploads/' + id + '/LocalVideos';
        if (fs.existsSync(dir)) {
            const files = fs.readdirSync(dir);
            return files;
        }
        else {
            return 'src/assets/images/Error.png';
        }
    }
    resize(path, format) {
        const readStream = fs.createReadStream(path);
        return readStream;
    }
};
VideoService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(video_1.Video)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], VideoService);
exports.VideoService = VideoService;
//# sourceMappingURL=video.service.js.map