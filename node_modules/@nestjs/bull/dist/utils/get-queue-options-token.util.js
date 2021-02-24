"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getQueueOptionsToken(name) {
    return name ? `BullQueueOptions_${name}` : 'BullQueueOptions_default';
}
exports.getQueueOptionsToken = getQueueOptionsToken;
