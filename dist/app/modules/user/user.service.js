"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const prisma_1 = __importDefault(require("../../../shared/prisma"));
const insertIntoDB = async (data) => {
    const result = await prisma_1.default.user.create({
        data,
    });
    return result;
};
// const getAllFromDB = async (): Promise<Partial<User>[]> => {
//   const result = await prisma.user.findMany({
//     select: {
//       id: true,
//       name: true,
//       email: true,
//       role: true,
//     },
//     include: {
//       accounts: true,
//     },
//   });
//   return result;
// };
const getAllFromDB = async () => {
    const result = await prisma_1.default.user.findMany({
        select: {
            id: true,
            name: true,
            email: true,
            role: true,
            accounts: {
                include: {
                    userBalances: true,
                },
            },
            currentAccount: true,
        },
    });
    return result;
};
const getByIdFromDB = async (id) => {
    const result = await prisma_1.default.user.findUnique({
        where: {
            id,
        },
        select: {
            id: true,
            name: true,
            email: true,
            role: true,
            accounts: {
                include: {
                    userBalances: true,
                },
            },
            currentAccount: true,
        },
    });
    return result;
};
const updateIntoDB = async (id, payload) => {
    const result = await prisma_1.default.user.update({
        where: {
            id: id,
        },
        data: payload,
        select: {
            id: true,
            name: true,
            email: true,
            role: true,
        },
    });
    return result;
};
const deleteFromDB = async (id) => {
    const result = await prisma_1.default.user.delete({
        where: {
            id: id,
        },
    });
    return result;
};
exports.UserService = {
    insertIntoDB,
    getAllFromDB,
    getByIdFromDB,
    updateIntoDB,
    deleteFromDB,
};
