"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DebitCreditCardRoutes = void 0;
const express_1 = __importDefault(require("express"));
const user_1 = require("../../../enums/user");
const auth_1 = __importDefault(require("../../middlewares/auth"));
const debitCreditCard_controller_1 = require("./debitCreditCard.controller");
// import { DebitCreditCardValidation } from './DebitCreditCard.validation';
const router = express_1.default.Router();
router.post('/', 
// auth(ENUM_USER_ROLE.ADMIN),
// validateRequest(DebitCreditCardValidation.CreateZodSchema),
debitCreditCard_controller_1.DebitCreditCardController.insertIntoDB);
router.get('/', debitCreditCard_controller_1.DebitCreditCardController.getAllFromDB);
router.get('/:id', debitCreditCard_controller_1.DebitCreditCardController.getByIdFromDB);
router.patch('/:id', 
// auth(ENUM_USER_ROLE.ADMIN),
// validateRequest(DebitCreditCardValidation.updateZodSchema),
debitCreditCard_controller_1.DebitCreditCardController.updateIntoDB);
router.delete('/:id', (0, auth_1.default)(user_1.ENUM_USER_ROLE.ADMIN), debitCreditCard_controller_1.DebitCreditCardController.deleteFromDB);
exports.DebitCreditCardRoutes = router;
