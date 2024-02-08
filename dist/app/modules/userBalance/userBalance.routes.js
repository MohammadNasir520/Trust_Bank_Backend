"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserBalanceRoutes = void 0;
const express_1 = __importDefault(require("express"));
// import validateRequest from '../../middlewares/validateRequest';
const user_1 = require("../../../enums/user");
const auth_1 = __importDefault(require("../../middlewares/auth"));
const userBalance_controller_1 = require("./userBalance.controller");
// import { UserBalanceValidation } from './UserBalance.validation';
const router = express_1.default.Router();
router.post('/user-deposit', (0, auth_1.default)(user_1.ENUM_USER_ROLE.ADMIN, user_1.ENUM_USER_ROLE.MANAGER, user_1.ENUM_USER_ROLE.CLIENT, user_1.ENUM_USER_ROLE.SUPER_ADMIN), 
// validateRequest(UserBalanceValidation.CreateZodSchema),
userBalance_controller_1.UserBalanceController.insertIntoDB);
router.post('/user-withdraw', (0, auth_1.default)(user_1.ENUM_USER_ROLE.ADMIN, user_1.ENUM_USER_ROLE.MANAGER, user_1.ENUM_USER_ROLE.CLIENT, user_1.ENUM_USER_ROLE.SUPER_ADMIN), 
// validateRequest(UserBalanceValidation.CreateZodSchema),
userBalance_controller_1.UserBalanceController.userWithdraw);
router.get('/', userBalance_controller_1.UserBalanceController.getAllFromDB);
router.get('/:id', userBalance_controller_1.UserBalanceController.getByIdFromDB);
router.delete('/:id', 
// auth(ENUM_USER_ROLE.ADMIN),
userBalance_controller_1.UserBalanceController.deleteFromDB);
exports.UserBalanceRoutes = router;
