"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoanSchemeService = void 0;
const prisma_1 = __importDefault(require("../../../shared/prisma"));
const insertIntoDB = async (data) => {
    const result = await prisma_1.default.loanScheme.create({
        data,
    });
    return result;
};
const getAllFromDB = async () => {
    const result = await prisma_1.default.loanScheme.findMany({});
    return result;
};
const getAllByCategoryFromDB = async (category) => {
    const result = await prisma_1.default.loanScheme.findMany({
        where: {
            scheme_category: category
        }
    });
    return result;
};
const getByIdFromDB = async (id) => {
    const result = await prisma_1.default.loanScheme.findUnique({
        where: {
            id: id,
        },
    });
    return result;
};
const updateIntoDB = async (id, payload) => {
    const result = await prisma_1.default.loanScheme.update({
        where: {
            id: id,
        },
        data: payload,
    });
    return result;
};
const deleteFromDB = async (id) => {
    const result = await prisma_1.default.loanScheme.delete({
        where: {
            id: id,
        },
    });
    return result;
};
exports.LoanSchemeService = {
    insertIntoDB,
    getAllFromDB,
    getAllByCategoryFromDB,
    getByIdFromDB,
    updateIntoDB,
    deleteFromDB,
};
