"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoanSchemeRoutes = void 0;
const express_1 = __importDefault(require("express"));
const user_1 = require("../../../enums/user");
const auth_1 = __importDefault(require("../../middlewares/auth"));
const loanScheme_controller_1 = require("./loanScheme.controller");
// import { CardValidation } from './Card.validation';
const router = express_1.default.Router();
router.post('/', 
// auth(
//   ENUM_USER_ROLE.ADMIN,
//   ENUM_USER_ROLE.MANAGER,
//   ENUM_USER_ROLE.CLIENT,
//   ENUM_USER_ROLE.SUPER_ADMIN
// ),
// validateRequest(CardValidation.CreateZodSchema),
loanScheme_controller_1.LoanSchemeController.insertIntoDB);
router.get('/', loanScheme_controller_1.LoanSchemeController.getAllFromDB);
router.get('/scheme_category/:category', loanScheme_controller_1.LoanSchemeController.getAllByCategoryFromDB);
router.get('/:id', loanScheme_controller_1.LoanSchemeController.getByIdFromDB);
router.patch('/:id', 
// auth(ENUM_USER_ROLE.ADMIN),
// validateRequest(CardValidation.updateZodSchema),
loanScheme_controller_1.LoanSchemeController.updateIntoDB);
router.delete('/:id', (0, auth_1.default)(user_1.ENUM_USER_ROLE.ADMIN), loanScheme_controller_1.LoanSchemeController.deleteFromDB);
exports.LoanSchemeRoutes = router;
