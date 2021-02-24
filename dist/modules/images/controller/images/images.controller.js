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
const images_service_1 = require("./../../services/images/images.service");
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const images_interface_1 = require("../../../model/images.interface");
let ImagesController = class ImagesController {
    constructor(service) {
        this.service = service;
    }
    add(data) {
        return this.service.save(data);
    }
    upload(data, files) {
        return this.service.createImage(files, data.projectId);
    }
    get() {
        return this.service.finAll();
    }
    getImage(res, params) {
        return this.service.getImage(params.id, params.name).pipe(res);
    }
    getOne(params) {
        return this.service.findImageByproject(params.id);
    }
    update(data, params) {
        return this.service.update(params.id, data);
    }
    delete(params) {
        return this.service.delete(params.id);
    }
    deleteImageFile(data) {
        return this.service.deleteImage(data.id_project, data.image_name);
    }
};
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Object)
], ImagesController.prototype, "add", null);
__decorate([
    common_1.Post(':projectId/uploadImage'),
    common_1.UseInterceptors(platform_express_1.FilesInterceptor('files')),
    __param(0, common_1.Body()), __param(1, common_1.UploadedFiles()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Object)
], ImagesController.prototype, "upload", null);
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], ImagesController.prototype, "get", null);
__decorate([
    common_1.Get('getImage/:id/:name'),
    __param(0, common_1.Res()), __param(1, common_1.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Object)
], ImagesController.prototype, "getImage", null);
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Object)
], ImagesController.prototype, "getOne", null);
__decorate([
    common_1.Put(':id'),
    __param(0, common_1.Body()), __param(1, common_1.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Object)
], ImagesController.prototype, "update", null);
__decorate([
    common_1.Delete(':id'),
    __param(0, common_1.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Object)
], ImagesController.prototype, "delete", null);
__decorate([
    common_1.Post('deleteImageFile'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ImagesController.prototype, "deleteImageFile", null);
ImagesController = __decorate([
    common_1.Controller('images'),
    __metadata("design:paramtypes", [images_service_1.ImagesService])
], ImagesController);
exports.ImagesController = ImagesController;
//# sourceMappingURL=images.controller.js.map