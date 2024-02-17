"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CurrentAccountRoutes = void 0;
const express_1 = __importDefault(require("express"));
const user_1 = require("../../../enums/user");
const auth_1 = __importDefault(require("../../middlewares/auth"));
const currentAccount_controller_1 = require("./currentAccount.controller");
// import { CurrentAccountValidation } from './CurrentAccount.validation';
const router = express_1.default.Router();
router.post('/', (0, auth_1.default)(), 
// validateRequest(CurrentAccountValidation.CreateZodSchema),
currentAccount_controller_1.CurrentAccountController.insertIntoDB);
router.get('/', currentAccount_controller_1.CurrentAccountController.getAllFromDB);
router.get('/:id', currentAccount_controller_1.CurrentAccountController.getByIdFromDB);
router.patch('/:id', (0, auth_1.default)(user_1.ENUM_USER_ROLE.CLIENT, user_1.ENUM_USER_ROLE.MANAGER), 
// validateRequest(CurrentAccountValidation.updateZodSchema),
currentAccount_controller_1.CurrentAccountController.updateIntoDB);
router.delete('/:id', 
// auth(ENUM_USER_ROLE.ADMIN),
currentAccount_controller_1.CurrentAccountController.deleteFromDB);
exports.CurrentAccountRoutes = router;
