"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_routes_1 = require("../modules/auth/auth.routes");
const account_routes_1 = require("../modules/account/account.routes");
const debitCreditCard_routes_1 = require("../modules/debitCreditCard/debitCreditCard.routes");
const profile_routes_1 = require("../modules/profile/profile.routes");
const user_routes_1 = require("../modules/user/user.routes");
const router = express_1.default.Router();
const moduleRoutes = [
    // ... routes
    {
        path: '/auth',
        route: auth_routes_1.AuthRoutes,
    },
    {
        path: '/users',
        route: user_routes_1.UserRoutes,
    },
    {
        path: '/profile',
        route: profile_routes_1.ProfileRoutes,
    },
    {
        path: '/accounts',
        route: account_routes_1.AccountRoutes,
    },
    {
        path: '/debitCreditCards',
        route: debitCreditCard_routes_1.DebitCreditCardRoutes,
    },
];
moduleRoutes.forEach(route => router.use(route.path, route.route));
exports.default = router;
