"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CardService = void 0;
const prisma_1 = __importDefault(require("../../../shared/prisma"));
const insertIntoDB = async (data, authUser) => {
    console.log('authUser', authUser);
    data.userId = authUser.userId;
    const result = await prisma_1.default.card.create({
        data,
        include: {
            user: true,
        },
    });
    return result;
};
const getAllFromDB = async () => {
    const result = await prisma_1.default.card.findMany({
        include: {
            user: true,
        },
    });
    return result;
};
const getByIdFromDB = async (id) => {
    const result = await prisma_1.default.card.findUnique({
        where: {
            id: id,
        },
        include: {
            user: true,
        },
    });
    return result;
};
const updateIntoDB = async (id, payload) => {
    const result = await prisma_1.default.card.update({
        where: {
            id: id,
        },
        data: payload,
        include: {
            user: true,
        },
    });
    return result;
};
const deleteFromDB = async (id) => {
    const result = await prisma_1.default.card.delete({
        where: {
            id: id,
        },
        include: {
            user: true,
        },
    });
    return result;
};
exports.CardService = {
    insertIntoDB,
    getAllFromDB,
    getByIdFromDB,
    updateIntoDB,
    deleteFromDB,
};
