"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SendMoneyRoutes = void 0;
const express_1 = __importDefault(require("express"));
const user_1 = require("../../../enums/user");
const auth_1 = __importDefault(require("../../middlewares/auth"));
const sendMoney_controller_1 = require("./sendMoney.controller");
// import { SendMoneyValidation } from './SendMoney.validation';
const router = express_1.default.Router();
router.post('/', (0, auth_1.default)(user_1.ENUM_USER_ROLE.ADMIN, user_1.ENUM_USER_ROLE.MANAGER, user_1.ENUM_USER_ROLE.CLIENT, user_1.ENUM_USER_ROLE.SUPER_ADMIN), 
// validateRequest(SendMoneyValidation.CreateZodSchema),
sendMoney_controller_1.SendMoneyController.insertIntoDB);
router.get('/', sendMoney_controller_1.SendMoneyController.getAllFromDB);
router.get('/:id', sendMoney_controller_1.SendMoneyController.getByIdFromDB);
router.patch('/:id', 
// auth(ENUM_USER_ROLE.ADMIN),
// validateRequest(SendMoneyValidation.updateZodSchema),
sendMoney_controller_1.SendMoneyController.updateIntoDB);
router.delete('/:id', (0, auth_1.default)(user_1.ENUM_USER_ROLE.ADMIN), sendMoney_controller_1.SendMoneyController.deleteFromDB);
exports.SendMoneyRoutes = router;
