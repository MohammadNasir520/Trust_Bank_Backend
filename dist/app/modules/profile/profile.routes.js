"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileRoutes = void 0;
const express_1 = __importDefault(require("express"));
const auth_1 = __importDefault(require("../../middlewares/auth"));
const profle_controller_1 = require("./profle.controller");
const router = express_1.default.Router();
router.get('/', (0, auth_1.default)(), profle_controller_1.ProfileController.getAllFromDB);
router.patch('/', (0, auth_1.default)(), profle_controller_1.ProfileController.updateByIdFromDB);
exports.ProfileRoutes = router;
