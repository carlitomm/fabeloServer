"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isProcessorCallback(processor) {
    return 'function' === typeof processor;
}
exports.isProcessorCallback = isProcessorCallback;
function isAdvancedProcessor(processor) {
    return ('object' === typeof processor &&
        !!processor.callback &&
        isProcessorCallback(processor.callback));
}
exports.isAdvancedProcessor = isAdvancedProcessor;
function isSeparateProcessor(processor) {
    return 'string' === typeof processor;
}
exports.isSeparateProcessor = isSeparateProcessor;
function isAdvancedSeparateProcessor(processor) {
    return ('object' === typeof processor &&
        !!processor.path &&
        isSeparateProcessor(processor.path));
}
exports.isAdvancedSeparateProcessor = isAdvancedSeparateProcessor;
