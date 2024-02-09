"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CurrencyExchangeRoutes = void 0;
const express_1 = __importDefault(require("express"));
const user_1 = require("../../../enums/user");
const auth_1 = __importDefault(require("../../middlewares/auth"));
const currencyExchange_controller_1 = require("./currencyExchange.controller");
const router = express_1.default.Router();
router.post('/', (0, auth_1.default)(user_1.ENUM_USER_ROLE.ADMIN, user_1.ENUM_USER_ROLE.MANAGER, user_1.ENUM_USER_ROLE.CLIENT, user_1.ENUM_USER_ROLE.SUPER_ADMIN), 
// validateRequest(CurrencyExchangeValidation.CreateZodSchema),
currencyExchange_controller_1.CurrencyExchangeController.insertIntoDB);
router.get('/', currencyExchange_controller_1.CurrencyExchangeController.getAllFromDB);
router.get('/:id', currencyExchange_controller_1.CurrencyExchangeController.getByIdFromDB);
router.delete('/:id', 
// auth(ENUM_USER_ROLE.ADMIN),
currencyExchange_controller_1.CurrencyExchangeController.deleteFromDB);
exports.CurrencyExchangeRoutes = router;
