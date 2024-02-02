"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AgricultureLoanRoutes = void 0;
const express_1 = __importDefault(require("express"));
const user_1 = require("../../../enums/user");
const auth_1 = __importDefault(require("../../middlewares/auth"));
const agricultureLoan_controller_1 = require("./agricultureLoan.controller");
// import { AgricultureLoanValidation } from './AgricultureLoan.validation';
const router = express_1.default.Router();
router.post('/', (0, auth_1.default)(user_1.ENUM_USER_ROLE.ADMIN, user_1.ENUM_USER_ROLE.MANAGER, user_1.ENUM_USER_ROLE.CLIENT, user_1.ENUM_USER_ROLE.SUPER_ADMIN), 
// validateRequest(AgricultureLoanValidation.CreateZodSchema),
agricultureLoan_controller_1.AgricultureLoanController.insertIntoDB);
router.get('/', agricultureLoan_controller_1.AgricultureLoanController.getAllFromDB);
router.get('/:id', agricultureLoan_controller_1.AgricultureLoanController.getByIdFromDB);
router.patch('/:id', (0, auth_1.default)(user_1.ENUM_USER_ROLE.ADMIN, user_1.ENUM_USER_ROLE.MANAGER, user_1.ENUM_USER_ROLE.CLIENT, user_1.ENUM_USER_ROLE.SUPER_ADMIN), 
// validateRequest(AgricultureLoanValidation.updateZodSchema),
agricultureLoan_controller_1.AgricultureLoanController.updateIntoDB);
router.delete('/:id', (0, auth_1.default)(user_1.ENUM_USER_ROLE.ADMIN), agricultureLoan_controller_1.AgricultureLoanController.deleteFromDB);
exports.AgricultureLoanRoutes = router;
