"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const project_module_1 = require("./modules/project/project.module");
const model_module_1 = require("./modules/model/model.module");
const database_module_1 = require("./modules/database/database.module");
const images_module_1 = require("./modules/images/images.module");
const videos_module_1 = require("./modules/videos/videos.module");
const admin_module_1 = require("./modules/admin/admin.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    common_1.Module({
        imports: [
            project_module_1.ProjectModule,
            model_module_1.ModelModule,
            database_module_1.DatabaseModule,
            images_module_1.ImagesModule,
            videos_module_1.VideosModule,
            admin_module_1.AdminModule
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map