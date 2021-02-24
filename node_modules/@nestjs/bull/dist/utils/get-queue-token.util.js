"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getQueueToken(name) {
    return name ? `BullQueue_${name}` : 'BullQueue_default';
}
exports.getQueueToken = getQueueToken;
