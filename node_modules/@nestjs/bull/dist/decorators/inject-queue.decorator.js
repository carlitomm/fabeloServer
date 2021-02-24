"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const utils_1 = require("../utils");
exports.InjectQueue = (name) => common_1.Inject(utils_1.getQueueToken(name));
