"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("@nestjs/typeorm");
const video_1 = require("./entity/video");
const common_1 = require("@nestjs/common");
const video_controller_1 = require("./controller/video/video.controller");
const video_service_1 = require("./services/video/video.service");
const platform_express_1 = require("@nestjs/platform-express");
const multer_1 = require("multer");
let VideosModule = class VideosModule {
};
VideosModule = __decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forFeature([video_1.Video]),
            platform_express_1.MulterModule.register({
                storage: multer_1.diskStorage({
                    destination: 'src/assets/temporal',
                    filename: (req, files, cb) => {
                        return cb(null, `${files.originalname}`);
                    }
                })
            })
        ],
        controllers: [video_controller_1.VideoController],
        providers: [video_service_1.VideoService],
        exports: [video_service_1.VideoService]
    })
], VideosModule);
exports.VideosModule = VideosModule;
//# sourceMappingURL=videos.module.js.map