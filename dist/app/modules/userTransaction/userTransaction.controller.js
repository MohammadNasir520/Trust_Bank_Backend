"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserTransactionController = void 0;
const http_status_1 = __importDefault(require("http-status"));
const catchAsync_1 = __importDefault(require("../../../shared/catchAsync"));
const sendResponse_1 = __importDefault(require("../../../shared/sendResponse"));
const userTransaction_service_1 = require("./userTransaction.service");
const getAllDepositFromDB = (0, catchAsync_1.default)(async (req, res) => {
    const result = await userTransaction_service_1.UserTransactionService.getAllDepositFromDB();
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'UserTransactions fetched successfully',
        data: result,
    });
});
const getAllWithdrawFromDB = (0, catchAsync_1.default)(async (req, res) => {
    const result = await userTransaction_service_1.UserTransactionService.getAllWithdrawFromDB();
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'UserTransactions fetched successfully',
        data: result,
    });
});
const getByIdFromDB = (0, catchAsync_1.default)(async (req, res) => {
    const { id } = req.params;
    const result = await userTransaction_service_1.UserTransactionService.getByIdFromDB(id);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'UserTransaction fetched successfully',
        data: result,
    });
});
const deleteFromDB = (0, catchAsync_1.default)(async (req, res) => {
    const id = req.params.id;
    const result = await userTransaction_service_1.UserTransactionService.deleteFromDB(id);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'UserTransaction deleted successfully',
        data: result,
    });
});
exports.UserTransactionController = {
    getAllDepositFromDB,
    getAllWithdrawFromDB,
    getByIdFromDB,
    deleteFromDB,
};
