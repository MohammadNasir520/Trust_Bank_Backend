"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountService = void 0;
const prisma_1 = __importDefault(require("../../../shared/prisma"));
const sendMail_1 = require("../../../utils/sendMail");
const account_utils_1 = require("./account.utils");
const insertIntoDB = async (data, authUser) => {
    const findUser = await prisma_1.default.user.findFirst({
        where: {
            id: authUser.userId,
        },
    });
    console.log('finduser', findUser);
    data.userId = authUser.userId;
    const id = await (0, account_utils_1.createNewIdNumber)(data === null || data === void 0 ? void 0 : data.accountType);
    data.accountId = id;
    const result = await prisma_1.default.accounts.create({
        data,
    });
    const subject = 'congratulations your Trust Bank account has been created';
    const from = process.env.Email;
    const html = `<p> Account ID: ${id}`;
    console.log(findUser);
    if (findUser) {
        (0, sendMail_1.sendEMail)(from, findUser.email, subject, html);
    }
    return result;
};
const getAllFromDB = async () => {
    const result = await prisma_1.default.accounts.findMany({
        include: {
            user: true,
            userBalances: true,
        },
    });
    return result;
};
const getByIdFromDB = async (id) => {
    const result = await prisma_1.default.accounts.findUnique({
        where: {
            id: id,
        },
    });
    return result;
};
const updateIntoDB = async (id, payload) => {
    const result = await prisma_1.default.accounts.update({
        where: {
            id: id,
        },
        data: payload,
    });
    return result;
};
const deleteFromDB = async (id) => {
    const result = await prisma_1.default.accounts.delete({
        where: {
            id: id,
        },
    });
    return result;
};
exports.AccountService = {
    insertIntoDB,
    getAllFromDB,
    getByIdFromDB,
    updateIntoDB,
    deleteFromDB,
};
