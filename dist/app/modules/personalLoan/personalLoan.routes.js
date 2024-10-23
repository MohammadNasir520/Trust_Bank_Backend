"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PersonalLoanRoutes = void 0;
const express_1 = __importDefault(require("express"));
const user_1 = require("../../../enums/user");
const auth_1 = __importDefault(require("../../middlewares/auth"));
const personalLoan_controller_1 = require("./personalLoan.controller");
// import { AgricultureLoanValidation } from './AgricultureLoan.validation';
const router = express_1.default.Router();
router.post('/', (0, auth_1.default)(user_1.ENUM_USER_ROLE.ADMIN, user_1.ENUM_USER_ROLE.MANAGER, user_1.ENUM_USER_ROLE.CLIENT, user_1.ENUM_USER_ROLE.SUPER_ADMIN), 
// validateRequest(AgricultureLoanValidation.CreateZodSchema),
personalLoan_controller_1.PersonalLoanController.insertIntoDB);
router.get('/', personalLoan_controller_1.PersonalLoanController.getAllFromDB);
router.get('/:id', personalLoan_controller_1.PersonalLoanController.getByIdFromDB);
router.patch('/:id', (0, auth_1.default)(user_1.ENUM_USER_ROLE.ADMIN, user_1.ENUM_USER_ROLE.MANAGER, user_1.ENUM_USER_ROLE.CLIENT, user_1.ENUM_USER_ROLE.SUPER_ADMIN), 
// validateRequest(AgricultureLoanValidation.updateZodSchema),
personalLoan_controller_1.PersonalLoanController.updateIntoDB);
router.delete('/:id', 
// auth(ENUM_USER_ROLE.ADMIN),
personalLoan_controller_1.PersonalLoanController.deleteFromDB);
exports.PersonalLoanRoutes = router;
