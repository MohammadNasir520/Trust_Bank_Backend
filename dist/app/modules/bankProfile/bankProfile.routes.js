"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BankProfileRoutes = void 0;
const express_1 = __importDefault(require("express"));
const bankProfile_controller_1 = require("./bankProfile.controller");
// import { BankProfileValidation } from './BankProfile.validation';
const router = express_1.default.Router();
router.post('/', 
// auth(
//   ENUM_USER_ROLE.ADMIN,
//   ENUM_USER_ROLE.MANAGER,
//   ENUM_USER_ROLE.CLIENT,
//   ENUM_USER_ROLE.SUPER_ADMIN
// ),
// validateRequest(BankProfileValidation.CreateZodSchema),
bankProfile_controller_1.BankProfileController.insertIntoDB);
router.get('/', bankProfile_controller_1.BankProfileController.getAllFromDB);
router.get('/:id', bankProfile_controller_1.BankProfileController.getByIdFromDB);
router.patch('/:id', 
// auth(
//   ENUM_USER_ROLE.ADMIN,
//   ENUM_USER_ROLE.MANAGER,
//   ENUM_USER_ROLE.CLIENT,
//   ENUM_USER_ROLE.SUPER_ADMIN
// ),
// validateRequest(BankProfileValidation.updateZodSchema),
bankProfile_controller_1.BankProfileController.updateIntoDB);
router.delete('/:id', 
// auth(ENUM_USER_ROLE.ADMIN),
bankProfile_controller_1.BankProfileController.deleteFromDB);
exports.BankProfileRoutes = router;
