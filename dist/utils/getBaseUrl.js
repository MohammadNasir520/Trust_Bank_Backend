"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.baseUrl = void 0;
const config_1 = __importDefault(require("../config"));
const baseUrl = () => {
    if (config_1.default.env === 'development') {
        return 'http://localhost:5000';
    }
    if (config_1.default.env === 'production') {
        return config_1.default.base_url;
    }
    // return 'http://localhost:5000';
};
exports.baseUrl = baseUrl;
