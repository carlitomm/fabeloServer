import { BullQueueEvent } from '../bull.types';
export declare const OnQueueEvent: (eventNameOrOptions: "error" | "waiting" | "active" | "stalled" | "progress" | "completed" | "failed" | "paused" | "resumed" | "cleaned" | "drained" | "removed" | "global:error" | "global:waiting" | "global:active" | "global:stalled" | "global:progress" | "global:completed" | "global:failed" | "global:paused" | "global:resumed" | "global:cleaned" | "global:drained" | "global:removed" | (Pick<{
    eventName: BullQueueEvent;
    name?: string;
    id?: string;
}, "eventName"> & Required<Pick<{
    eventName: BullQueueEvent;
    name?: string;
    id?: string;
}, "id">> & Partial<Record<"name", undefined>>) | (Pick<{
    eventName: BullQueueEvent;
    name?: string;
    id?: string;
}, "eventName"> & Required<Pick<{
    eventName: BullQueueEvent;
    name?: string;
    id?: string;
}, "name">> & Partial<Record<"id", undefined>>)) => MethodDecorator;
export declare const OnQueueError: (options?: import("../bull.types").RequireOnlyOne<{
    id?: string;
    name?: string;
}, "id" | "name">) => MethodDecorator;
export declare const OnQueueWaiting: (options?: import("../bull.types").RequireOnlyOne<{
    id?: string;
    name?: string;
}, "id" | "name">) => MethodDecorator;
export declare const OnQueueActive: (options?: import("../bull.types").RequireOnlyOne<{
    id?: string;
    name?: string;
}, "id" | "name">) => MethodDecorator;
export declare const OnQueueStalled: (options?: import("../bull.types").RequireOnlyOne<{
    id?: string;
    name?: string;
}, "id" | "name">) => MethodDecorator;
export declare const OnQueueProgress: (options?: import("../bull.types").RequireOnlyOne<{
    id?: string;
    name?: string;
}, "id" | "name">) => MethodDecorator;
export declare const OnQueueCompleted: (options?: import("../bull.types").RequireOnlyOne<{
    id?: string;
    name?: string;
}, "id" | "name">) => MethodDecorator;
export declare const OnQueueFailed: (options?: import("../bull.types").RequireOnlyOne<{
    id?: string;
    name?: string;
}, "id" | "name">) => MethodDecorator;
export declare const OnQueuePaused: (options?: import("../bull.types").RequireOnlyOne<{
    id?: string;
    name?: string;
}, "id" | "name">) => MethodDecorator;
export declare const OnQueueResumed: (options?: import("../bull.types").RequireOnlyOne<{
    id?: string;
    name?: string;
}, "id" | "name">) => MethodDecorator;
export declare const OnQueueCleaned: (options?: import("../bull.types").RequireOnlyOne<{
    id?: string;
    name?: string;
}, "id" | "name">) => MethodDecorator;
export declare const OnQueueDrained: (options?: import("../bull.types").RequireOnlyOne<{
    id?: string;
    name?: string;
}, "id" | "name">) => MethodDecorator;
export declare const OnQueueRemoved: (options?: import("../bull.types").RequireOnlyOne<{
    id?: string;
    name?: string;
}, "id" | "name">) => MethodDecorator;
export declare const OnGlobalQueueError: (options?: import("../bull.types").RequireOnlyOne<{
    id?: string;
    name?: string;
}, "id" | "name">) => MethodDecorator;
export declare const OnGlobalQueueWaiting: (options?: import("../bull.types").RequireOnlyOne<{
    id?: string;
    name?: string;
}, "id" | "name">) => MethodDecorator;
export declare const OnGlobalQueueActive: (options?: import("../bull.types").RequireOnlyOne<{
    id?: string;
    name?: string;
}, "id" | "name">) => MethodDecorator;
export declare const OnGlobalQueueStalled: (options?: import("../bull.types").RequireOnlyOne<{
    id?: string;
    name?: string;
}, "id" | "name">) => MethodDecorator;
export declare const OnGlobalQueueProgress: (options?: import("../bull.types").RequireOnlyOne<{
    id?: string;
    name?: string;
}, "id" | "name">) => MethodDecorator;
export declare const OnGlobalQueueCompleted: (options?: import("../bull.types").RequireOnlyOne<{
    id?: string;
    name?: string;
}, "id" | "name">) => MethodDecorator;
export declare const OnGlobalQueueFailed: (options?: import("../bull.types").RequireOnlyOne<{
    id?: string;
    name?: string;
}, "id" | "name">) => MethodDecorator;
export declare const OnGlobalQueuePaused: (options?: import("../bull.types").RequireOnlyOne<{
    id?: string;
    name?: string;
}, "id" | "name">) => MethodDecorator;
export declare const OnGlobalQueueResumed: (options?: import("../bull.types").RequireOnlyOne<{
    id?: string;
    name?: string;
}, "id" | "name">) => MethodDecorator;
export declare const OnGlobalQueueCleaned: (options?: import("../bull.types").RequireOnlyOne<{
    id?: string;
    name?: string;
}, "id" | "name">) => MethodDecorator;
export declare const OnGlobalQueueDrained: (options?: import("../bull.types").RequireOnlyOne<{
    id?: string;
    name?: string;
}, "id" | "name">) => MethodDecorator;
export declare const OnGlobalQueueRemoved: (options?: import("../bull.types").RequireOnlyOne<{
    id?: string;
    name?: string;
}, "id" | "name">) => MethodDecorator;
