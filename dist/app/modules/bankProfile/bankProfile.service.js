"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BankProfileService = void 0;
const http_status_1 = __importDefault(require("http-status"));
const ApiError_1 = __importDefault(require("../../../errors/ApiError"));
const prisma_1 = __importDefault(require("../../../shared/prisma"));
const insertIntoDB = async (data) => {
    const bankProfile = await prisma_1.default.bankProfile.findFirst({});
    if (bankProfile) {
        throw new ApiError_1.default(http_status_1.default.BAD_REQUEST, `already have a bank Profile. id: ${bankProfile.id}`);
    }
    const result = await prisma_1.default.bankProfile.create({
        data,
    });
    return result;
};
const getAllFromDB = async () => {
    const result = await prisma_1.default.bankProfile.findMany({
        include: {
            bankBalances: {
                select: {
                    id: true,
                    balance: true,
                    currency: true,
                },
            },
        },
    });
    return result;
};
const getByIdFromDB = async (id) => {
    const result = await prisma_1.default.bankProfile.findUnique({
        where: {
            id: id,
        },
    });
    return result;
};
const updateIntoDB = async (id, payload) => {
    const result = await prisma_1.default.bankProfile.update({
        where: {
            id: id,
        },
        data: payload,
    });
    return result;
};
const deleteFromDB = async (id) => {
    const result = await prisma_1.default.bankProfile.delete({
        where: {
            id: id,
        },
    });
    return result;
};
exports.BankProfileService = {
    insertIntoDB,
    getAllFromDB,
    getByIdFromDB,
    updateIntoDB,
    deleteFromDB,
};
