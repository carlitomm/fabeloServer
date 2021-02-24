"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const bull_constants_1 = require("../bull.constants");
exports.Processor = (queueName) => common_1.SetMetadata(bull_constants_1.BULL_MODULE_QUEUE, { name: queueName });
