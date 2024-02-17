"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoanSchemeController = void 0;
const http_status_1 = __importDefault(require("http-status"));
const catchAsync_1 = __importDefault(require("../../../shared/catchAsync"));
const sendResponse_1 = __importDefault(require("../../../shared/sendResponse"));
const loanScheme_service_1 = require("./loanScheme.service");
const insertIntoDB = (0, catchAsync_1.default)(async (req, res) => {
    const result = await loanScheme_service_1.LoanSchemeService.insertIntoDB(req.body);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Loan Scheme created successfully',
        data: result,
    });
});
const getAllFromDB = (0, catchAsync_1.default)(async (req, res) => {
    const result = await loanScheme_service_1.LoanSchemeService.getAllFromDB();
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Loan Schemes fetched successfully',
        data: result,
    });
});
const getAllByCategoryFromDB = (0, catchAsync_1.default)(async (req, res) => {
    const { category } = req.params;
    const result = await loanScheme_service_1.LoanSchemeService.getAllByCategoryFromDB(category);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Loan Schemes fetched successfully',
        data: result,
    });
});
const getByIdFromDB = (0, catchAsync_1.default)(async (req, res) => {
    const { id } = req.params;
    const result = await loanScheme_service_1.LoanSchemeService.getByIdFromDB(id);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Loan Scheme fetched successfully',
        data: result,
    });
});
const updateIntoDB = (0, catchAsync_1.default)(async (req, res) => {
    const id = req.params.id;
    const payload = req.body;
    const result = await loanScheme_service_1.LoanSchemeService.updateIntoDB(id, payload);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Loan Scheme updated successfully',
        data: result,
    });
});
const deleteFromDB = (0, catchAsync_1.default)(async (req, res) => {
    const id = req.params.id;
    const result = await loanScheme_service_1.LoanSchemeService.deleteFromDB(id);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Loan Scheme deleted successfully',
        data: result,
    });
});
exports.LoanSchemeController = {
    insertIntoDB,
    getAllFromDB,
    getAllByCategoryFromDB,
    getByIdFromDB,
    updateIntoDB,
    deleteFromDB,
};
