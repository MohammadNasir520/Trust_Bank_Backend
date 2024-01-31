"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileService = void 0;
const http_status_1 = __importDefault(require("http-status"));
const ApiError_1 = __importDefault(require("../../../errors/ApiError"));
const prisma_1 = __importDefault(require("../../../shared/prisma"));
const getByIdFromDB = async (user) => {
    const result = await prisma_1.default.user.findUnique({
        where: {
            id: user.userId,
        },
    });
    if (!result) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'your profile does not exist');
    }
    // eslint-disable-next-line no-unused-vars
    const { password } = result, restData = __rest(result, ["password"]);
    return restData;
};
const updateByIdFromDB = async (user, data) => {
    const result = await prisma_1.default.user.update({
        where: {
            id: user.userId,
        },
        data: data,
    });
    // eslint-disable-next-line no-unused-vars
    const { password } = result, restData = __rest(result, ["password"]);
    return restData;
};
exports.ProfileService = {
    getByIdFromDB,
    updateByIdFromDB,
};
