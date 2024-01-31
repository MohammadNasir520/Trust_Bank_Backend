"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DebitCreditCardService = void 0;
const prisma_1 = __importDefault(require("../../../shared/prisma"));
const insertIntoDB = async (data) => {
    console.log(data);
    const result = await prisma_1.default.debitCreditCard.create({
        data,
    });
    return result;
};
const getAllFromDB = async () => {
    const result = await prisma_1.default.debitCreditCard.findMany({});
    return result;
};
const getByIdFromDB = async (id) => {
    const result = await prisma_1.default.debitCreditCard.findUnique({
        where: {
            id: id,
        },
    });
    return result;
};
const updateIntoDB = async (id, payload) => {
    const result = await prisma_1.default.debitCreditCard.update({
        where: {
            id: id,
        },
        data: payload,
    });
    return result;
};
const deleteFromDB = async (id) => {
    const result = await prisma_1.default.debitCreditCard.delete({
        where: {
            id: id,
        },
    });
    return result;
};
exports.DebitCreditCardService = {
    insertIntoDB,
    getAllFromDB,
    getByIdFromDB,
    updateIntoDB,
    deleteFromDB,
};
