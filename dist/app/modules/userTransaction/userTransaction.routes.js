"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserTransactionRoutes = void 0;
const express_1 = __importDefault(require("express"));
const userTransaction_controller_1 = require("./userTransaction.controller");
// import { UserTransactionValidation } from './UserTransaction.validation';
const router = express_1.default.Router();
router.get('/deposit_withdraw/deposit', userTransaction_controller_1.UserTransactionController.getAllDepositFromDB);
router.get('/deposit_withdraw/withdraw', userTransaction_controller_1.UserTransactionController.getAllWithdrawFromDB);
router.get('/deposit_withdraw/:id', userTransaction_controller_1.UserTransactionController.getByIdFromDB);
router.delete('/:id', userTransaction_controller_1.UserTransactionController.deleteFromDB);
exports.UserTransactionRoutes = router;
