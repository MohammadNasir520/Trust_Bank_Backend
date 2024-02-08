"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserBalanceService = void 0;
const http_status_1 = __importDefault(require("http-status"));
const ApiError_1 = __importDefault(require("../../../errors/ApiError"));
const prisma_1 = __importDefault(require("../../../shared/prisma"));
const insertIntoDB = async (data, authUser) => {
    const bankAccount = await prisma_1.default.accounts.findFirst({
        where: {
            userId: authUser.userId,
        },
    });
    const accountId = bankAccount === null || bankAccount === void 0 ? void 0 : bankAccount.id;
    if (!accountId) {
        throw new ApiError_1.default(http_status_1.default.BAD_REQUEST, 'you have no account, please create account first');
    }
    // return console.log(data, bankAccount?.id);
    const findExistBalance = await prisma_1.default.userBalance.findFirst({
        where: {
            accountId: accountId,
            currency: data.currency,
        },
    });
    let result;
    if (!findExistBalance) {
        result = await prisma_1.default.userBalance.create({
            data,
            include: {
                userAccounts: true,
            },
        });
    }
    else if (findExistBalance) {
        const newBalance = data.balance + findExistBalance.balance;
        result = await prisma_1.default.userBalance.update({
            where: {
                id: findExistBalance.id,
                accountId: accountId,
                currency: data.currency,
            },
            data: {
                balance: newBalance,
            },
            include: {
                userAccounts: true,
            },
        });
    }
    return result;
};
const userWithdraw = async (data, authUser) => {
    const bankAccount = await prisma_1.default.accounts.findFirst({
        where: {
            userId: authUser.userId,
        },
    });
    const accountId = bankAccount === null || bankAccount === void 0 ? void 0 : bankAccount.id;
    if (!accountId) {
        throw new ApiError_1.default(http_status_1.default.BAD_REQUEST, 'you have no account, please create account first');
    }
    // return console.log(data, bankAccount?.id);
    const findExistBalance = await prisma_1.default.userBalance.findFirst({
        where: {
            accountId: accountId,
            currency: data.currency,
        },
    });
    let result;
    if (findExistBalance) {
        if (data.balance > findExistBalance.balance) {
            throw new ApiError_1.default(http_status_1.default.BAD_REQUEST, `you have not enough balance. you exceeds ${data.balance - findExistBalance.balance} ${findExistBalance.currency}`);
        }
        const newBalance = findExistBalance.balance - data.balance;
        result = await prisma_1.default.userBalance.update({
            where: {
                id: findExistBalance.id,
                accountId: accountId,
                currency: data.currency,
            },
            data: {
                balance: newBalance,
            },
        });
    }
    return result;
};
const getAllFromDB = async () => {
    const result = await prisma_1.default.userBalance.findMany({});
    return result;
};
const getByIdFromDB = async (id) => {
    const result = await prisma_1.default.userBalance.findUnique({
        where: {
            id: id,
        },
    });
    return result;
};
const deleteFromDB = async (id) => {
    const result = await prisma_1.default.userBalance.delete({
        where: {
            id: id,
        },
    });
    return result;
};
exports.UserBalanceService = {
    insertIntoDB,
    getAllFromDB,
    getByIdFromDB,
    userWithdraw,
    deleteFromDB,
};
