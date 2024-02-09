"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserTransactionService = void 0;
const prisma_1 = __importDefault(require("../../../shared/prisma"));
const getAllDepositFromDB = async () => {
    const result = await prisma_1.default.userTransaction.findMany({
        where: {
            type: 'deposit',
        },
        include: {
            user: true,
        },
    });
    return result;
};
const getAllWithdrawFromDB = async () => {
    const result = await prisma_1.default.userTransaction.findMany({
        where: {
            type: 'withdraw',
        },
        include: {
            user: true,
        },
    });
    return result;
};
const getByIdFromDB = async (id) => {
    const result = await prisma_1.default.userTransaction.findFirst({
        where: {
            userId: id,
        },
        include: {
            user: true,
        },
    });
    return result;
};
const deleteFromDB = async (id) => {
    const result = await prisma_1.default.userTransaction.delete({
        where: {
            id: id,
        },
        include: {
            user: true,
        },
    });
    return result;
};
exports.UserTransactionService = {
    getAllDepositFromDB,
    getAllWithdrawFromDB,
    getByIdFromDB,
    deleteFromDB,
};
