"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CurrencyExchangeService = void 0;
const prisma_1 = __importDefault(require("../../../shared/prisma"));
const insertIntoDB = async (data, authUser) => {
    const findUser = await prisma_1.default.accounts.findFirst({
        where: {
            userId: authUser.userId,
        },
    });
    const accountId = findUser === null || findUser === void 0 ? void 0 : findUser.id;
    const findUserBalance = await prisma_1.default.userBalance.findFirst({
        where: {
            accountId: accountId,
            currency: data.toCurrency,
        },
    });
    let result;
    if (!(findUserBalance === null || findUserBalance === void 0 ? void 0 : findUserBalance.id)) {
        result = await prisma_1.default.userBalance.create({
            data: {
                balance: data.toAmount,
                currency: data.toCurrency,
                userAccounts: {
                    connect: { id: accountId },
                },
            },
        });
    }
    else if (findUserBalance === null || findUserBalance === void 0 ? void 0 : findUserBalance.id) {
        const newBalance = findUserBalance.balance + data.toAmount;
        result = await prisma_1.default.userBalance.update({
            where: {
                id: findUserBalance.id,
                accountId: accountId,
                currency: data.toCurrency,
            },
            data: {
                balance: newBalance,
            },
        });
        // eslint-disable-next-line no-unused-vars
        const newBankBalance = findUserBalance.balance - data.fromAmount;
        // eslint-disable-next-line no-unused-vars
        const bankBalanceResult = await prisma_1.default.bankBalance.findFirst({
            where: {
                currency: data.fromCurrency,
            },
        });
        if (bankBalanceResult) {
            const newBalance = bankBalanceResult.balance - data.fromAmount;
            // console.log(bankBalanceResult.balance - data.fromAmount);
            // eslint-disable-next-line no-unused-vars
            const updateBankBalanceResult = await prisma_1.default.bankBalance.update({
                where: {
                    id: bankBalanceResult.id,
                    currency: data.fromCurrency,
                },
                data: {
                    balance: newBalance,
                },
            });
        }
    }
    return result;
};
const getAllFromDB = async () => {
    const result = await prisma_1.default.currencyExchange.findMany({});
    return result;
};
const getByIdFromDB = async (id) => {
    const result = await prisma_1.default.currencyExchange.findUnique({
        where: {
            id: id,
        },
    });
    return result;
};
const deleteFromDB = async (id) => {
    const result = await prisma_1.default.currencyExchange.delete({
        where: {
            id: id,
        },
    });
    return result;
};
exports.CurrencyExchangeService = {
    insertIntoDB,
    getAllFromDB,
    getByIdFromDB,
    deleteFromDB,
};
