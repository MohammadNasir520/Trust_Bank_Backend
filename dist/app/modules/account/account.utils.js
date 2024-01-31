"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createNewIdNumber = exports.findLastAccountId = void 0;
const prisma_1 = __importDefault(require("../../../shared/prisma"));
// Account ID
const findLastAccountId = async () => {
    const lastAccount = await prisma_1.default.accounts.findMany({
        orderBy: {
            createdAt: 'desc',
        },
    });
    console.log(lastAccount[0].accountId);
    return lastAccount[0].accountId;
};
exports.findLastAccountId = findLastAccountId;
const createNewIdNumber = async (accountType) => {
    const lastAccountId = await (0, exports.findLastAccountId)();
    const splitId = lastAccountId.split('-');
    console.log(splitId);
    const incrementId = (parseInt(splitId[1]) + 1).toString().padStart(5, '0');
    console.log('type', accountType);
    const splitAccountType = accountType.split('');
    const newAccountTd = splitAccountType[0] + '-' + incrementId;
    console.log(newAccountTd);
    return newAccountTd;
};
exports.createNewIdNumber = createNewIdNumber;
