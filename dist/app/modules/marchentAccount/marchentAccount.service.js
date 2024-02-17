"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MerchentAccountService = void 0;
const http_status_1 = __importDefault(require("http-status"));
const ApiError_1 = __importDefault(require("../../../errors/ApiError"));
const prisma_1 = __importDefault(require("../../../shared/prisma"));
const sendMail_1 = require("../../../utils/sendMail");
const marchentAccount_utils_1 = require("./marchentAccount.utils");
const insertIntoDB = async (data, authUser) => {
    const findUser = await prisma_1.default.user.findFirst({
        where: {
            id: authUser.userId,
        },
    });
    console.log('finduser', findUser);
    if (!authUser.userId) {
        throw new ApiError_1.default(http_status_1.default.BAD_REQUEST, 'please login first');
    }
    const findAccount = await prisma_1.default.merchentAccount.findFirst({
        where: {
            userId: authUser.userId,
        },
    });
    if (findAccount) {
        throw new ApiError_1.default(http_status_1.default.BAD_REQUEST, 'you already have an account');
    }
    const id = await (0, marchentAccount_utils_1.createNewIdNumber)(data === null || data === void 0 ? void 0 : data.accountType);
    data.accountId = id;
    console.log('user', data);
    const result = await prisma_1.default.merchentAccount.create({
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-ignore
        data: Object.assign(Object.assign({}, data), { user: { connect: { id: authUser.userId } } }),
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
    const result = await prisma_1.default.merchentAccount.findMany({
        include: {
            user: {
                select: {
                    name: true,
                    email: true,
                    role: true,
                    createdAt: true,
                    id: true,
                },
            },
            merchentAccountBalance: true,
        },
    });
    return result;
};
const getByIdFromDB = async (id) => {
    const result = await prisma_1.default.merchentAccount.findUnique({
        where: {
            id: id,
        },
    });
    return result;
};
const updateIntoDB = async (id, payload) => {
    const result = await prisma_1.default.merchentAccount.update({
        where: {
            id: id,
        },
        data: payload,
    });
    return result;
};
const deleteFromDB = async (id) => {
    const result = await prisma_1.default.merchentAccount.delete({
        where: {
            id: id,
        },
    });
    return result;
};
exports.MerchentAccountService = {
    insertIntoDB,
    getAllFromDB,
    getByIdFromDB,
    updateIntoDB,
    deleteFromDB,
};
