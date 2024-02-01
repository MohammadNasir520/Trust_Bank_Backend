"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createNewIdNumber = exports.findLastAccountId = void 0;
const prisma_1 = __importDefault(require("../../../shared/prisma"));
// Account ID
const findLastAccountId = async () => {
    var _a, _b;
    const lastAccount = await prisma_1.default.accounts.findMany({
        orderBy: {
            createdAt: 'desc',
        },
    });
    console.log((_a = lastAccount[0]) === null || _a === void 0 ? void 0 : _a.accountId);
    return ((_b = lastAccount[0]) === null || _b === void 0 ? void 0 : _b.accountId) || 'M-00001';
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
