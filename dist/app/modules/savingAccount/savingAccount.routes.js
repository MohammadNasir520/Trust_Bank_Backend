"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SavingAccountRoutes = void 0;
const express_1 = __importDefault(require("express"));
const user_1 = require("../../../enums/user");
const auth_1 = __importDefault(require("../../middlewares/auth"));
const savingAccount_controller_1 = require("./savingAccount.controller");
// import { SavingAccountValidation } from './SavingAccount.validation';
const router = express_1.default.Router();
router.post('/', (0, auth_1.default)(), 
// validateRequest(SavingAccountValidation.CreateZodSchema),
savingAccount_controller_1.SavingAccountController.insertIntoDB);
router.get('/', savingAccount_controller_1.SavingAccountController.getAllFromDB);
router.get('/:id', savingAccount_controller_1.SavingAccountController.getByIdFromDB);
router.patch('/:id', (0, auth_1.default)(user_1.ENUM_USER_ROLE.CLIENT, user_1.ENUM_USER_ROLE.MANAGER), 
// validateRequest(SavingAccountValidation.updateZodSchema),
savingAccount_controller_1.SavingAccountController.updateIntoDB);
router.delete('/:id', 
// auth(ENUM_USER_ROLE.ADMIN),
savingAccount_controller_1.SavingAccountController.deleteFromDB);
exports.SavingAccountRoutes = router;
