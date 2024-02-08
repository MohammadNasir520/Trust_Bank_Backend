"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BankBalanceService = void 0;
const http_status_1 = __importDefault(require("http-status"));
const ApiError_1 = __importDefault(require("../../../errors/ApiError"));
const prisma_1 = __importDefault(require("../../../shared/prisma"));
const bankProfile_constants_1 = require("../bankProfile/bankProfile.constants");
const insertIntoDB = async (data) => {
    data.bankProfileId = bankProfile_constants_1.bankId;
    const bankBalance = await prisma_1.default.bankBalance.findFirst({
        where: {
            currency: data.currency,
        },
    });
    if (bankBalance) {
        throw new ApiError_1.default(http_status_1.default.BAD_REQUEST, 'this currency already exist');
    }
    const result = await prisma_1.default.bankBalance.create({
        data,
    });
    return result;
};
const getAllFromDB = async () => {
    const result = await prisma_1.default.bankBalance.findMany({});
    return result;
};
const getByIdFromDB = async (id) => {
    const result = await prisma_1.default.bankBalance.findUnique({
        where: {
            id: id,
        },
    });
    return result;
};
const deposit = async (id, payload) => {
    const existingBalace = await prisma_1.default.bankBalance.findFirst({
        where: {
            id: id,
        },
    });
    let newBalance = 0;
    if (existingBalace && payload.balance) {
        // eslint-disable-next-line no-unused-vars
        newBalance = (existingBalace === null || existingBalace === void 0 ? void 0 : existingBalace.balance) + payload.balance;
    }
    const result = await prisma_1.default.bankBalance.update({
        where: {
            id: id,
        },
        data: {
            balance: newBalance,
        },
    });
    return result;
};
const withdraw = async (id, payload) => {
    const existingBalace = await prisma_1.default.bankBalance.findFirst({
        where: {
            id: id,
        },
    });
    let newBalance = 0;
    if (existingBalace && payload.balance) {
        // eslint-disable-next-line no-unused-vars
        newBalance = (existingBalace === null || existingBalace === void 0 ? void 0 : existingBalace.balance) - payload.balance;
    }
    const result = await prisma_1.default.bankBalance.update({
        where: {
            id: id,
        },
        data: {
            balance: newBalance,
        },
    });
    return result;
};
const deleteFromDB = async (id) => {
    const result = await prisma_1.default.bankBalance.delete({
        where: {
            id: id,
        },
    });
    return result;
};
exports.BankBalanceService = {
    insertIntoDB,
    getAllFromDB,
    getByIdFromDB,
    deposit,
    withdraw,
    deleteFromDB,
};
