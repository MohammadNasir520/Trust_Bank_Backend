"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileController = void 0;
const http_status_1 = __importDefault(require("http-status"));
const catchAsync_1 = __importDefault(require("../../../shared/catchAsync"));
const sendResponse_1 = __importDefault(require("../../../shared/sendResponse"));
const profile_service_1 = require("./profile.service");
const getAllFromDB = (0, catchAsync_1.default)(async (req, res) => {
    const user = req.user;
    const result = await profile_service_1.ProfileService.getByIdFromDB(user);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'profile fetched successfully',
        data: result
    });
});
const updateByIdFromDB = (0, catchAsync_1.default)(async (req, res) => {
    const user = req.user;
    const result = await profile_service_1.ProfileService.updateByIdFromDB(user, req.body);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'profile updated successfully',
        data: result
    });
});
exports.ProfileController = {
    getAllFromDB,
    updateByIdFromDB
};
