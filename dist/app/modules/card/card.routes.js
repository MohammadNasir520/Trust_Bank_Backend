"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CardRoutes = void 0;
const express_1 = __importDefault(require("express"));
const user_1 = require("../../../enums/user");
const auth_1 = __importDefault(require("../../middlewares/auth"));
const card_controller_1 = require("./card.controller");
// import { CardValidation } from './Card.validation';
const router = express_1.default.Router();
router.post('/', (0, auth_1.default)(user_1.ENUM_USER_ROLE.ADMIN, user_1.ENUM_USER_ROLE.MANAGER, user_1.ENUM_USER_ROLE.CLIENT, user_1.ENUM_USER_ROLE.SUPER_ADMIN), 
// validateRequest(CardValidation.CreateZodSchema),
card_controller_1.CardController.insertIntoDB);
router.get('/', card_controller_1.CardController.getAllFromDB);
router.get('/:id', card_controller_1.CardController.getByIdFromDB);
router.patch('/:id', 
// auth(ENUM_USER_ROLE.ADMIN),
// validateRequest(CardValidation.updateZodSchema),
card_controller_1.CardController.updateIntoDB);
router.delete('/:id', (0, auth_1.default)(user_1.ENUM_USER_ROLE.ADMIN), card_controller_1.CardController.deleteFromDB);
exports.CardRoutes = router;
