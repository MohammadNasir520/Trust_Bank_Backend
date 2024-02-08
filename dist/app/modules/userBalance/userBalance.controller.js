"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserBalanceController = void 0;
const http_status_1 = __importDefault(require("http-status"));
const catchAsync_1 = __importDefault(require("../../../shared/catchAsync"));
const sendResponse_1 = __importDefault(require("../../../shared/sendResponse"));
const userBalance_service_1 = require("./userBalance.service");
const insertIntoDB = (0, catchAsync_1.default)(async (req, res) => {
    const authUser = req.user;
    const result = await userBalance_service_1.UserBalanceService.insertIntoDB(req.body, authUser);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'UserBalances created successfully',
        data: result,
    });
});
const userWithdraw = (0, catchAsync_1.default)(async (req, res) => {
    const authUser = req.user;
    const result = await userBalance_service_1.UserBalanceService.userWithdraw(req.body, authUser);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'UserBalances created successfully',
        data: result,
    });
});
const getAllFromDB = (0, catchAsync_1.default)(async (req, res) => {
    const result = await userBalance_service_1.UserBalanceService.getAllFromDB();
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'UserBalances fetched successfully',
        data: result,
    });
});
const getByIdFromDB = (0, catchAsync_1.default)(async (req, res) => {
    const { id } = req.params;
    const result = await userBalance_service_1.UserBalanceService.getByIdFromDB(id);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'UserBalance fetched successfully',
        data: result,
    });
});
const deleteFromDB = (0, catchAsync_1.default)(async (req, res) => {
    const id = req.params.id;
    const result = await userBalance_service_1.UserBalanceService.deleteFromDB(id);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'UserBalance deleted successfully',
        data: result,
    });
});
exports.UserBalanceController = {
    insertIntoDB,
    getAllFromDB,
    getByIdFromDB,
    userWithdraw,
    deleteFromDB,
};
