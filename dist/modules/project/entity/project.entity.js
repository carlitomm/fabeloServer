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
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const video_1 = require("../../videos/entity/video");
const images_1 = require("../../images/entity/images");
let ProjectEntity = class ProjectEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], ProjectEntity.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], ProjectEntity.prototype, "titulo", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Date)
], ProjectEntity.prototype, "fecha", void 0);
__decorate([
    typeorm_1.Column({ length: "2048" }),
    __metadata("design:type", String)
], ProjectEntity.prototype, "descripcion", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], ProjectEntity.prototype, "dimensiones", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], ProjectEntity.prototype, "material", void 0);
__decorate([
    typeorm_1.OneToMany(type => video_1.Video, video => video.project),
    __metadata("design:type", Array)
], ProjectEntity.prototype, "videos", void 0);
__decorate([
    typeorm_1.OneToMany(type => images_1.Images, images => images.project),
    __metadata("design:type", Array)
], ProjectEntity.prototype, "images", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], ProjectEntity.prototype, "order", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], ProjectEntity.prototype, "videoDimensions", void 0);
ProjectEntity = __decorate([
    typeorm_1.Entity('proyecto')
], ProjectEntity);
exports.ProjectEntity = ProjectEntity;
//# sourceMappingURL=project.entity.js.map