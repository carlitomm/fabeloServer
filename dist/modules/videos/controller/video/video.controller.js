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
const common_1 = require("@nestjs/common");
const video_service_1 = require("../../services/video/video.service");
const platform_express_1 = require("@nestjs/platform-express");
let VideoController = class VideoController {
    constructor(service) {
        this.service = service;
    }
    add(data) {
        return this.service.save(data);
    }
    upload(data, files) {
        return this.service.createVideo(files, data.projectId);
    }
    get() {
        return this.service.finAll();
    }
    getVideo(res, params) {
        return this.service.getVideo(params.id, params.name).pipe(res);
    }
    getOne(params) {
        return this.service.findVideoByproject(params.id);
    }
    update(data, params) {
        return this.service.update(params.id, data);
    }
    delete(params) {
        return this.service.delete(params.id);
    }
    deleteImageFile(data) {
        return this.service.deleteVideo(data.id_project, data.video_name);
    }
};
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Object)
], VideoController.prototype, "add", null);
__decorate([
    common_1.Post(':projectId/uploadVideo'),
    common_1.UseInterceptors(platform_express_1.FilesInterceptor('files')),
    __param(0, common_1.Body()), __param(1, common_1.UploadedFiles()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Object)
], VideoController.prototype, "upload", null);
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], VideoController.prototype, "get", null);
__decorate([
    common_1.Get('getVideo/:id/:name'),
    __param(0, common_1.Res()), __param(1, common_1.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Object)
], VideoController.prototype, "getVideo", null);
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Object)
], VideoController.prototype, "getOne", null);
__decorate([
    common_1.Put(':id'),
    __param(0, common_1.Body()), __param(1, common_1.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Object)
], VideoController.prototype, "update", null);
__decorate([
    common_1.Delete(':id'),
    __param(0, common_1.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Object)
], VideoController.prototype, "delete", null);
__decorate([
    common_1.Post('deleteVideoFile'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], VideoController.prototype, "deleteImageFile", null);
VideoController = __decorate([
    common_1.Controller('video'),
    __metadata("design:paramtypes", [video_service_1.VideoService])
], VideoController);
exports.VideoController = VideoController;
//# sourceMappingURL=video.controller.js.map