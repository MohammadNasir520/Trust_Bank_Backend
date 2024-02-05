import express from 'express';
import { AuthRoutes } from '../modules/auth/auth.routes';

import { AccountRoutes } from '../modules/account/account.routes';
import { AgricultureLoanRoutes } from '../modules/agricultureLoan/agricultureLoan.routes';
import { BankBalanceRoutes } from '../modules/bankBalance/bankBalance.routes';
import { BankProfileRoutes } from '../modules/bankProfile/bankProfile.routes';
import { CardRoutes } from '../modules/card/card.routes';
import { CurrencyExchangeRoutes } from '../modules/currencyExchange/currencyExchange.routes';
import { DebitCreditCardRoutes } from '../modules/debitCreditCard/debitCreditCard.routes';
import { ProfileRoutes } from '../modules/profile/profile.routes';
import { SendMoneyRoutes } from '../modules/sendMoney/sendMoney.routes';
import { UserRoutes } from '../modules/user/user.routes';
import { UserBalanceRoutes } from '../modules/userBalance/userBalance.routes';

const router = express.Router();

const moduleRoutes = [
  // ... routes
  {
    path: '/bankprofile',
    route: BankProfileRoutes,
  },
  {
    path: '/bankbalance',
    route: BankBalanceRoutes,
  },
  {
    path: '/auth',
    route: AuthRoutes,
  },
  {
    path: '/users',
    route: UserRoutes,
  },
  {
    path: '/profile',
    route: ProfileRoutes,
  },
  {
    path: '/accounts',
    route: AccountRoutes,
  },
  {
    path: '/userbalances',
    route: UserBalanceRoutes,
  },
  {
    path: '/debitCreditCards',
    route: DebitCreditCardRoutes,
  },
  {
    path: '/agricultureloan',
    route: AgricultureLoanRoutes,
  },
  {
    path: '/cards',
    route: CardRoutes,
  },
  {
    path: '/sendmoney',
    route: SendMoneyRoutes,
  },
  {
    path: '/currency-exchanges',
    route: CurrencyExchangeRoutes,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.route));
export default router;
