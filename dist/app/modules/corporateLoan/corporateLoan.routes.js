"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CorporateLoanRoutes = void 0;
const express_1 = __importDefault(require("express"));
const user_1 = require("../../../enums/user");
const auth_1 = __importDefault(require("../../middlewares/auth"));
const corporateLoan_controller_1 = require("./corporateLoan.controller");
// import { AgricultureLoanValidation } from './AgricultureLoan.validation';
const router = express_1.default.Router();
router.post('/', (0, auth_1.default)(user_1.ENUM_USER_ROLE.ADMIN, user_1.ENUM_USER_ROLE.MANAGER, user_1.ENUM_USER_ROLE.CLIENT, user_1.ENUM_USER_ROLE.SUPER_ADMIN), 
// validateRequest(AgricultureLoanValidation.CreateZodSchema),
corporateLoan_controller_1.CorporateLoanController.insertIntoDB);
router.get('/', corporateLoan_controller_1.CorporateLoanController.getAllFromDB);
router.get('/:id', corporateLoan_controller_1.CorporateLoanController.getByIdFromDB);
router.patch('/:id', (0, auth_1.default)(user_1.ENUM_USER_ROLE.ADMIN, user_1.ENUM_USER_ROLE.MANAGER, user_1.ENUM_USER_ROLE.CLIENT, user_1.ENUM_USER_ROLE.SUPER_ADMIN), 
// validateRequest(AgricultureLoanValidation.updateZodSchema),
corporateLoan_controller_1.CorporateLoanController.updateIntoDB);
router.delete('/:id', 
// auth(ENUM_USER_ROLE.ADMIN),
corporateLoan_controller_1.CorporateLoanController.deleteFromDB);
exports.CorporateLoanRoutes = router;
