"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DebitCreditCardController = void 0;
const http_status_1 = __importDefault(require("http-status"));
const catchAsync_1 = __importDefault(require("../../../shared/catchAsync"));
const sendResponse_1 = __importDefault(require("../../../shared/sendResponse"));
const debitCreditCard_service_1 = require("./debitCreditCard.service");
const insertIntoDB = (0, catchAsync_1.default)(async (req, res) => {
    const result = await debitCreditCard_service_1.DebitCreditCardService.insertIntoDB(req.body);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'DebitCreditCards created successfully',
        data: result,
    });
});
const getAllFromDB = (0, catchAsync_1.default)(async (req, res) => {
    const result = await debitCreditCard_service_1.DebitCreditCardService.getAllFromDB();
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'DebitCreditCards fetched successfully',
        data: result,
    });
});
const getByIdFromDB = (0, catchAsync_1.default)(async (req, res) => {
    const { id } = req.params;
    const result = await debitCreditCard_service_1.DebitCreditCardService.getByIdFromDB(id);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'DebitCreditCard fetched successfully',
        data: result,
    });
});
const updateIntoDB = (0, catchAsync_1.default)(async (req, res) => {
    const id = req.params.id;
    const payload = req.body;
    const result = await debitCreditCard_service_1.DebitCreditCardService.updateIntoDB(id, payload);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'DebitCreditCard updated successfully',
        data: result,
    });
});
const deleteFromDB = (0, catchAsync_1.default)(async (req, res) => {
    const id = req.params.id;
    const result = await debitCreditCard_service_1.DebitCreditCardService.deleteFromDB(id);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'DebitCreditCard deleted successfully',
        data: result,
    });
});
exports.DebitCreditCardController = {
    insertIntoDB,
    getAllFromDB,
    getByIdFromDB,
    updateIntoDB,
    deleteFromDB,
};
