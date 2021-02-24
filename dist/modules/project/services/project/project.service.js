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
const project_entity_1 = require("./../../entity/project.entity");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const images_service_1 = require("../../../images/services/images/images.service");
const video_service_1 = require("../../../videos/services/video/video.service");
let ProjectService = class ProjectService {
    constructor(element, imageService, videoService) {
        this.element = element;
        this.imageService = imageService;
        this.videoService = videoService;
    }
    async save(data) {
        return await this.element.insert(data);
    }
    async update(id, data) {
        return await this.element.update(id, data);
    }
    async finAll() {
        return await this.element.find({ relations: ['videos', 'images'], order: { order: 'ASC' } });
    }
    async findOne(id) {
        return await this.element.findOne(id, { relations: ['videos', 'images'] });
    }
    async delete(id) {
        this.videoService.deleteVideoOfProject(id);
        this.imageService.deleteImagesOfProject(id);
        return await this.element.delete(id);
    }
    async deleteOnUpgrade(id) {
        return await this.element.delete(id);
    }
};
ProjectService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(project_entity_1.ProjectEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        images_service_1.ImagesService,
        video_service_1.VideoService])
], ProjectService);
exports.ProjectService = ProjectService;
//# sourceMappingURL=project.service.js.map