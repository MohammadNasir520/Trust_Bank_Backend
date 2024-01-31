"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountController = void 0;
const http_status_1 = __importDefault(require("http-status"));
const catchAsync_1 = __importDefault(require("../../../shared/catchAsync"));
const sendResponse_1 = __importDefault(require("../../../shared/sendResponse"));
const account_service_1 = require("./account.service");
const insertIntoDB = (0, catchAsync_1.default)(async (req, res) => {
    const authUser = req.user;
    const result = await account_service_1.AccountService.insertIntoDB(req.body, authUser);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Accounts created successfully',
        data: result,
    });
});
const getAllFromDB = (0, catchAsync_1.default)(async (req, res) => {
    const result = await account_service_1.AccountService.getAllFromDB();
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Accounts fetched successfully',
        data: result,
    });
});
const getByIdFromDB = (0, catchAsync_1.default)(async (req, res) => {
    const { id } = req.params;
    const result = await account_service_1.AccountService.getByIdFromDB(id);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Account fetched successfully',
        data: result,
    });
});
const updateIntoDB = (0, catchAsync_1.default)(async (req, res) => {
    const id = req.params.id;
    const payload = req.body;
    const result = await account_service_1.AccountService.updateIntoDB(id, payload);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Account updated successfully',
        data: result,
    });
});
const deleteFromDB = (0, catchAsync_1.default)(async (req, res) => {
    const id = req.params.id;
    const result = await account_service_1.AccountService.deleteFromDB(id);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Account deleted successfully',
        data: result,
    });
});
exports.AccountController = {
    insertIntoDB,
    getAllFromDB,
    getByIdFromDB,
    updateIntoDB,
    deleteFromDB,
};
