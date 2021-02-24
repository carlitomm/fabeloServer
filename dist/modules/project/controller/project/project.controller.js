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
const project_service_1 = require("./../../services/project/project.service");
const common_1 = require("@nestjs/common");
const images_service_1 = require("../../../images/services/images/images.service");
const video_service_1 = require("../../../videos/services/video/video.service");
const project_entity_1 = require("../../entity/project.entity");
let ProjectController = class ProjectController {
    constructor(service, imageService, videosService) {
        this.service = service;
        this.imageService = imageService;
        this.videosService = videosService;
    }
    async add(data) {
        const id = await this.service.save(data);
        data.id = id.identifiers[0].id;
        if (data.images)
            for (let i = 0; i < data.images.length; i++) {
                const element = data.images[i];
                let image = element;
                image.project = data;
                this.imageService.save(image);
            }
        if (data.videos)
            for (let i = 0; i < data.videos.length; i++) {
                const element = data.videos[i];
                let video = element;
                video.project = data;
                this.videosService.save(video);
            }
        return id;
    }
    get() {
        return this.service.finAll();
    }
    getOne(params) {
        return this.service.findOne(params.id);
    }
    async update(data, params) {
        const rem = await this.service.deleteOnUpgrade(params.id);
        const id = await this.service.save(data);
        data.id = id.identifiers[0].id;
        if (data.images)
            for (let i = 0; i < data.images.length; i++) {
                const element = data.images[i];
                let image = element;
                image.project = data;
                this.imageService.save(image);
            }
        if (data.videos)
            for (let i = 0; i < data.videos.length; i++) {
                const element = data.videos[i];
                let video = element;
                video.project = data;
                this.videosService.save(video);
            }
        return id;
    }
    delete(params) {
        return this.service.delete(params.id);
    }
};
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [project_entity_1.ProjectEntity]),
    __metadata("design:returntype", Promise)
], ProjectController.prototype, "add", null);
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], ProjectController.prototype, "get", null);
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Object)
], ProjectController.prototype, "getOne", null);
__decorate([
    common_1.Put(':id'),
    __param(0, common_1.Body()), __param(1, common_1.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [project_entity_1.ProjectEntity, Object]),
    __metadata("design:returntype", Promise)
], ProjectController.prototype, "update", null);
__decorate([
    common_1.Delete(':id'),
    __param(0, common_1.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Object)
], ProjectController.prototype, "delete", null);
ProjectController = __decorate([
    common_1.Controller('project'),
    __metadata("design:paramtypes", [project_service_1.ProjectService,
        images_service_1.ImagesService,
        video_service_1.VideoService])
], ProjectController);
exports.ProjectController = ProjectController;
//# sourceMappingURL=project.controller.js.map