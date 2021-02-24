"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("@nestjs/typeorm");
const project_entity_1 = require("./entity/project.entity");
const common_1 = require("@nestjs/common");
const project_controller_1 = require("./controller/project/project.controller");
const project_service_1 = require("./services/project/project.service");
const images_module_1 = require("../images/images.module");
const videos_module_1 = require("../videos/videos.module");
let ProjectModule = class ProjectModule {
};
ProjectModule = __decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forFeature([project_entity_1.ProjectEntity]), images_module_1.ImagesModule, videos_module_1.VideosModule],
        controllers: [project_controller_1.ProjectController],
        providers: [project_service_1.ProjectService]
    })
], ProjectModule);
exports.ProjectModule = ProjectModule;
//# sourceMappingURL=project.module.js.map