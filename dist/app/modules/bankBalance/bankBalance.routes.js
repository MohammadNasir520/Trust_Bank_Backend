"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BankBalanceRoutes = void 0;
const express_1 = __importDefault(require("express"));
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const bankBalance_controller_1 = require("./bankBalance.controller");
const bankBalance_validation_1 = require("./bankBalance.validation");
// import { BankBalanceValidation } from './BankBalance.validation';
const router = express_1.default.Router();
router.post('/add-currency', 
// auth(
//   ENUM_USER_ROLE.ADMIN,
//   ENUM_USER_ROLE.MANAGER,
//   ENUM_USER_ROLE.CLIENT,
//   ENUM_USER_ROLE.SUPER_ADMIN
// ),
(0, validateRequest_1.default)(bankBalance_validation_1.BankBalanceValidation.CreateZodSchema), bankBalance_controller_1.BankBalanceController.insertIntoDB);
router.get('/', bankBalance_controller_1.BankBalanceController.getAllFromDB);
router.get('/:id', bankBalance_controller_1.BankBalanceController.getByIdFromDB);
router.patch('/deposit/:id', 
// auth(
//   ENUM_USER_ROLE.ADMIN,
//   ENUM_USER_ROLE.MANAGER,
//   ENUM_USER_ROLE.CLIENT,
//   ENUM_USER_ROLE.SUPER_ADMIN
// ),
(0, validateRequest_1.default)(bankBalance_validation_1.BankBalanceValidation.updateZodSchema), bankBalance_controller_1.BankBalanceController.deposit);
router.patch('/withdraw/:id', 
// auth(
//   ENUM_USER_ROLE.ADMIN,
//   ENUM_USER_ROLE.MANAGER,
//   ENUM_USER_ROLE.CLIENT,
//   ENUM_USER_ROLE.SUPER_ADMIN
// ),
(0, validateRequest_1.default)(bankBalance_validation_1.BankBalanceValidation.updateZodSchema), bankBalance_controller_1.BankBalanceController.withdraw);
router.delete('/:id', 
// auth(ENUM_USER_ROLE.ADMIN),
bankBalance_controller_1.BankBalanceController.deleteFromDB);
exports.BankBalanceRoutes = router;
