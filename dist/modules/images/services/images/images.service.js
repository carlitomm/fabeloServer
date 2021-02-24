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
const images_1 = require("./../../entity/images");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const fs = require("fs");
const sharp = require("sharp");
let ImagesService = class ImagesService {
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
    createImage(files, id_project) {
        const dir = 'src/assets/uploads/' + id_project;
        files.forEach(element => {
            if (!fs.existsSync(dir))
                fs.mkdirSync(dir);
            fs.copyFileSync('src/assets/temporal/' + element.filename, dir + '/' + element.filename);
            fs.unlinkSync('src/assets/temporal/' + element.filename);
        });
    }
    findImageByproject(id) {
        const dir = 'src/assets/uploads/' + id;
        if (fs.existsSync(dir)) {
            const files = fs.readdirSync(dir);
            for (let i = 0; i < files.length; i++) {
                if (files[i] == 'LocalVideos')
                    files.splice(i, 1);
            }
            return { id, name: files };
        }
        else {
            return 'src/assets/images/Error.png';
        }
    }
    getImage(projectId, imageName) {
        let dir = 'src/assets/uploads/';
        dir += projectId + '/' + imageName;
        try {
            if (fs.existsSync(dir)) {
                return this.resize(dir, 'jpg');
            }
            else
                return this.resize('src/assets/images/Error.png', 'png');
        }
        catch (e) {
            return this.resize('src/assets/images/Error.png', 'png');
        }
    }
    deleteImage(projectId, imageName) {
        let dir = 'src/assets/uploads/';
        dir += projectId + '/' + imageName;
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
    deleteImagesOfProject(Projectid) {
        const dir = 'src/assets/uploads/' + Projectid;
        if (fs.existsSync(dir)) {
            const files = fs.readdirSync(dir);
            for (let i = 0; i < files.length; i++) {
                this.deleteImage(Projectid, files[i]);
            }
            fs.rmdirSync(dir);
            return true;
        }
        else {
            return false;
        }
    }
    getImageProcess(name, id_ad, id_client, type, id_store) {
        let dir = './src/public/uploads/' + id_client;
        if (id_store) {
            dir += '/store/' + id_store;
        }
        else {
            dir += '/' + id_ad + '/' + name;
        }
        if (id_store && id_ad) {
            dir += '/' + id_ad + '/' + name;
        }
        else {
            dir += '/' + name;
        }
        if (id_ad === 0 && id_client === 0)
            dir = './src/assets/images/' + name;
        let heigth = 0;
        let width = 0;
        if (type.toString() === "'carousel'") {
            width = 345;
            heigth = 235;
        }
        else if (type.toString() === "'lowercarousel'") {
            width = 140;
            heigth = 110;
        }
        else if (type.toString() === "'fixed'") {
            width = 555;
            heigth = 555;
        }
        else if (type.toString() === "'list'") {
            width = 300;
            heigth = 180;
        }
        else if (type.toString() === "'expandCarousel'" || type.toString() === "'storeCard'") {
            width = 350;
            heigth = 350;
        }
        else if (type.toString() === "'zoom'") {
            width = 850;
            heigth = 478;
        }
        else if (type.toString() === "'store'") {
            width = 1200;
            heigth = 600;
        }
        else if (type.toString() === "'reduce'") {
            width = 60;
            heigth = 60;
        }
        else if (type.toString() === "'large'") {
            width = 555;
            heigth = 235;
        }
        return { directory: dir, width: width, heigth: heigth };
    }
    resize(path, format) {
        const readStream = fs.createReadStream(path);
        let transform = sharp();
        if (format) {
            transform = transform.toFormat(format);
        }
        return readStream.pipe(transform);
    }
};
ImagesService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(images_1.Images)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ImagesService);
exports.ImagesService = ImagesService;
//# sourceMappingURL=images.service.js.map