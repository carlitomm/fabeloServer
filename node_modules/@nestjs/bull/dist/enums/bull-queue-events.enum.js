"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BullQueueEvents;
(function (BullQueueEvents) {
    BullQueueEvents["ERROR"] = "error";
    BullQueueEvents["WAITING"] = "waiting";
    BullQueueEvents["ACTIVE"] = "active";
    BullQueueEvents["STALLED"] = "stalled";
    BullQueueEvents["PROGRESS"] = "progress";
    BullQueueEvents["COMPLETED"] = "completed";
    BullQueueEvents["FAILED"] = "failed";
    BullQueueEvents["PAUSED"] = "paused";
    BullQueueEvents["RESUMED"] = "resumed";
    BullQueueEvents["CLEANED"] = "cleaned";
    BullQueueEvents["DRAINED"] = "drained";
    BullQueueEvents["REMOVED"] = "removed";
})(BullQueueEvents = exports.BullQueueEvents || (exports.BullQueueEvents = {}));
