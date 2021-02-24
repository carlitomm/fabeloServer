import { Provider } from '@nestjs/common';
import { BullModuleAsyncOptions, BullModuleOptions } from './interfaces/bull-module-options.interface';
export declare function createQueueOptionProviders(options: BullModuleOptions[]): any;
export declare function createQueueProviders(options: BullModuleOptions[]): any;
export declare function createAsyncQueueOptionsProviders(options: BullModuleAsyncOptions[]): Provider[];
