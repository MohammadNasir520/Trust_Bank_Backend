"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const http_status_1 = __importDefault(require("http-status"));
const config_1 = __importDefault(require("../../../config"));
const ApiError_1 = __importDefault(require("../../../errors/ApiError"));
const jwtHelpers_1 = require("../../../helpers/jwtHelpers");
const prisma_1 = __importDefault(require("../../../shared/prisma"));
const insertIntoDB = async (data) => {
    const result = await prisma_1.default.user.create({
        data,
    });
    return result;
};
const loginUser = async (payload) => {
    const { email, password } = payload;
    const isUserExist = await prisma_1.default.user.findUnique({
        where: {
            email: email,
        },
    });
    if (!isUserExist) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'User does not exist');
    }
    const isPasswordMatched = isUserExist.password === password;
    if (!isPasswordMatched) {
        throw new ApiError_1.default(http_status_1.default.UNAUTHORIZED, 'Invalid Password');
    }
    //create access token & refresh token
    const { id: userId, role } = isUserExist;
    const accessToken = jwtHelpers_1.jwtHelpers.createToken({ userId, role }, config_1.default.jwt.secret, '365d');
    const refreshToken = jwtHelpers_1.jwtHelpers.createToken({ userId, role }, config_1.default.jwt.refresh_secret, '365d');
    return {
        accessToken,
        refreshToken,
    };
};
exports.AuthService = {
    insertIntoDB,
    loginUser,
};
