"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SendMoneyService = void 0;
const prisma_1 = __importDefault(require("../../../shared/prisma"));
const insertIntoDB = async (data, authUser) => {
    console.log('authUser', authUser);
    // data.userId = authUser.userId;
    const result = await prisma_1.default.sendMoney.create({
        data,
    });
    return result;
};
const getAllFromDB = async () => {
    const result = await prisma_1.default.sendMoney.findMany({});
    return result;
};
const getByIdFromDB = async (id) => {
    const result = await prisma_1.default.sendMoney.findUnique({
        where: {
            id: id,
        },
    });
    return result;
};
const updateIntoDB = async (id, payload) => {
    const result = await prisma_1.default.sendMoney.update({
        where: {
            id: id,
        },
        data: payload,
    });
    return result;
};
const deleteFromDB = async (id) => {
    const result = await prisma_1.default.sendMoney.delete({
        where: {
            id: id,
        },
    });
    return result;
};
exports.SendMoneyService = {
    insertIntoDB,
    getAllFromDB,
    getByIdFromDB,
    updateIntoDB,
    deleteFromDB,
};
