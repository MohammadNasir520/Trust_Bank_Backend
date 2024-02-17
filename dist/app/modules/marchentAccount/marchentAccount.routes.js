"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MerchentAccountRoutes = void 0;
const express_1 = __importDefault(require("express"));
const auth_1 = __importDefault(require("../../middlewares/auth"));
const marchentAccount_controller_1 = require("./marchentAccount.controller");
// import { MerchentAccountValidation } from './MerchentAccount.validation';
const router = express_1.default.Router();
router.post('/', (0, auth_1.default)(), 
// validateRequest(MerchentAccountValidation.CreateZodSchema),
marchentAccount_controller_1.MerchentAccountController.insertIntoDB);
router.get('/', marchentAccount_controller_1.MerchentAccountController.getAllFromDB);
router.get('/:id', marchentAccount_controller_1.MerchentAccountController.getByIdFromDB);
router.patch('/:id', (0, auth_1.default)(), 
// validateRequest(MerchentAccountValidation.updateZodSchema),
marchentAccount_controller_1.MerchentAccountController.updateIntoDB);
router.delete('/:id', 
// auth(ENUM_USER_ROLE.ADMIN),
marchentAccount_controller_1.MerchentAccountController.deleteFromDB);
exports.MerchentAccountRoutes = router;
