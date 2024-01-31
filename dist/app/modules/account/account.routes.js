"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountRoutes = void 0;
const express_1 = __importDefault(require("express"));
const user_1 = require("../../../enums/user");
const auth_1 = __importDefault(require("../../middlewares/auth"));
const account_controller_1 = require("./account.controller");
// import { AccountValidation } from './account.validation';
const router = express_1.default.Router();
router.post('/', (0, auth_1.default)(user_1.ENUM_USER_ROLE.CLIENT, user_1.ENUM_USER_ROLE.MANAGER), 
// validateRequest(AccountValidation.CreateZodSchema),
account_controller_1.AccountController.insertIntoDB);
router.get('/', account_controller_1.AccountController.getAllFromDB);
router.get('/:id', account_controller_1.AccountController.getByIdFromDB);
router.patch('/:id', (0, auth_1.default)(user_1.ENUM_USER_ROLE.CLIENT, user_1.ENUM_USER_ROLE.MANAGER), 
// validateRequest(AccountValidation.updateZodSchema),
account_controller_1.AccountController.updateIntoDB);
router.delete('/:id', 
// auth(ENUM_USER_ROLE.ADMIN),
account_controller_1.AccountController.deleteFromDB);
exports.AccountRoutes = router;
