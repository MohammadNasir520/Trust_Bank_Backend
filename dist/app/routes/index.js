"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_routes_1 = require("../modules/auth/auth.routes");
const account_routes_1 = require("../modules/account/account.routes");
const agricultureLoan_routes_1 = require("../modules/agricultureLoan/agricultureLoan.routes");
const bankBalance_routes_1 = require("../modules/bankBalance/bankBalance.routes");
const bankProfile_routes_1 = require("../modules/bankProfile/bankProfile.routes");
const card_routes_1 = require("../modules/card/card.routes");
const currencyExchange_routes_1 = require("../modules/currencyExchange/currencyExchange.routes");
const debitCreditCard_routes_1 = require("../modules/debitCreditCard/debitCreditCard.routes");
const profile_routes_1 = require("../modules/profile/profile.routes");
const sendMoney_routes_1 = require("../modules/sendMoney/sendMoney.routes");
const user_routes_1 = require("../modules/user/user.routes");
const userBalance_routes_1 = require("../modules/userBalance/userBalance.routes");
const userTransaction_routes_1 = require("../modules/userTransaction/userTransaction.routes");
const router = express_1.default.Router();
const moduleRoutes = [
    // ... routes
    {
        path: '/bankprofile',
        route: bankProfile_routes_1.BankProfileRoutes,
    },
    {
        path: '/bankbalance',
        route: bankBalance_routes_1.BankBalanceRoutes,
    },
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
        path: '/userbalances',
        route: userBalance_routes_1.UserBalanceRoutes,
    },
    {
        path: '/debitCreditCards',
        route: debitCreditCard_routes_1.DebitCreditCardRoutes,
    },
    {
        path: '/agricultureloan',
        route: agricultureLoan_routes_1.AgricultureLoanRoutes,
    },
    {
        path: '/cards',
        route: card_routes_1.CardRoutes,
    },
    {
        path: '/sendmoney',
        route: sendMoney_routes_1.SendMoneyRoutes,
    },
    {
        path: '/currency-exchanges',
        route: currencyExchange_routes_1.CurrencyExchangeRoutes,
    },
    {
        path: '/transactions',
        route: userTransaction_routes_1.UserTransactionRoutes,
    },
];
moduleRoutes.forEach(route => router.use(route.path, route.route));
exports.default = router;
