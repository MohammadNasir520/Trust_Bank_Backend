"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentAccountRoutes = void 0;
const express_1 = __importDefault(require("express"));
const user_1 = require("../../../enums/user");
const auth_1 = __importDefault(require("../../middlewares/auth"));
const StudentAccount_controller_1 = require("./StudentAccount.controller");
// import { StudentAccountValidation } from './StudentAccount.validation';
const router = express_1.default.Router();
router.post('/', (0, auth_1.default)(), 
// validateRequest(StudentAccountValidation.CreateZodSchema),
StudentAccount_controller_1.StudentAccountController.insertIntoDB);
router.get('/', StudentAccount_controller_1.StudentAccountController.getAllFromDB);
router.get('/:id', StudentAccount_controller_1.StudentAccountController.getByIdFromDB);
router.patch('/:id', (0, auth_1.default)(user_1.ENUM_USER_ROLE.CLIENT, user_1.ENUM_USER_ROLE.MANAGER), 
// validateRequest(StudentAccountValidation.updateZodSchema),
StudentAccount_controller_1.StudentAccountController.updateIntoDB);
router.delete('/:id', 
// auth(ENUM_USER_ROLE.ADMIN),
StudentAccount_controller_1.StudentAccountController.deleteFromDB);
exports.StudentAccountRoutes = router;
