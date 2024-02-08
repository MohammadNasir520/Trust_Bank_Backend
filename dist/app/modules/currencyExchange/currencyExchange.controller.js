"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CurrencyExchangeController = void 0;
const http_status_1 = __importDefault(require("http-status"));
const catchAsync_1 = __importDefault(require("../../../shared/catchAsync"));
const sendResponse_1 = __importDefault(require("../../../shared/sendResponse"));
const currencyExchange_service_1 = require("./currencyExchange.service");
const insertIntoDB = (0, catchAsync_1.default)(async (req, res) => {
    const authUser = req.user;
    const result = await currencyExchange_service_1.CurrencyExchangeService.insertIntoDB(req.body, authUser);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'CurrencyExchanges  successfully',
        data: result,
    });
});
const getAllFromDB = (0, catchAsync_1.default)(async (req, res) => {
    const result = await currencyExchange_service_1.CurrencyExchangeService.getAllFromDB();
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'CurrencyExchanges fetched successfully',
        data: result,
    });
});
const getByIdFromDB = (0, catchAsync_1.default)(async (req, res) => {
    const { id } = req.params;
    const result = await currencyExchange_service_1.CurrencyExchangeService.getByIdFromDB(id);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'CurrencyExchange fetched successfully',
        data: result,
    });
});
// const deposit = catchAsync(async (req: Request, res: Response) => {
//   const id = req.params.id;
//   const payload = req.body;
//   const result = await CurrencyExchangeService.deposit(id, payload);
//   sendResponse(res, {
//     statusCode: httpStatus.OK,
//     success: true,
//     message: 'deposit successfully',
//     data: result,
//   });
// });
// const withdraw = catchAsync(async (req: Request, res: Response) => {
//   const id = req.params.id;
//   const payload = req.body;
//   const result = await CurrencyExchangeService.withdraw(id, payload);
//   sendResponse(res, {
//     statusCode: httpStatus.OK,
//     success: true,
//     message: 'withdraw successfully',
//     data: result,
//   });
// });
const deleteFromDB = (0, catchAsync_1.default)(async (req, res) => {
    const id = req.params.id;
    const result = await currencyExchange_service_1.CurrencyExchangeService.deleteFromDB(id);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'CurrencyExchange deleted successfully',
        data: result,
    });
});
exports.CurrencyExchangeController = {
    insertIntoDB,
    getAllFromDB,
    getByIdFromDB,
    // deposit,
    // withdraw,
    deleteFromDB,
};
