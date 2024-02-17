import express from 'express';
import { AuthRoutes } from '../modules/auth/auth.routes';

import { StudentAccountRoutes } from '../modules/StudentAccount/StudentAccount.routes';
import { AccountRoutes } from '../modules/account/account.routes';
import { AgricultureLoanRoutes } from '../modules/agricultureLoan/agricultureLoan.routes';
import { BankBalanceRoutes } from '../modules/bankBalance/bankBalance.routes';
import { BankProfileRoutes } from '../modules/bankProfile/bankProfile.routes';
import { CardRoutes } from '../modules/card/card.routes';
import { CorporateLoanRoutes } from '../modules/corporateLoan/corporateLoan.routes';
import { CurrencyExchangeRoutes } from '../modules/currencyExchange/currencyExchange.routes';
import { CurrentAccountRoutes } from '../modules/currentAccount/currentAccount.routes';
import { DebitCreditCardRoutes } from '../modules/debitCreditCard/debitCreditCard.routes';

import { LoanSchemeRoutes } from '../modules/loanScheme/loanScheme.routes';
import { PersonalLoanRoutes } from '../modules/personalLoan/personalLoan.routes';

import { MerchentAccountRoutes } from '../modules/marchentAccount/marchentAccount.routes';

import { ProfileRoutes } from '../modules/profile/profile.routes';
import { SavingAccountRoutes } from '../modules/savingAccount/savingAccount.routes';
import { SendMoneyRoutes } from '../modules/sendMoney/sendMoney.routes';
import { UserRoutes } from '../modules/user/user.routes';
import { UserBalanceRoutes } from '../modules/userBalance/userBalance.routes';
import { UserTransactionRoutes } from '../modules/userTransaction/userTransaction.routes';

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
    path: '/current-account',
    route: CurrentAccountRoutes,
  },
  {
    path: '/saving-accounts',
    route: SavingAccountRoutes,
  },
  {
    path: '/student-accounts',
    route: StudentAccountRoutes,
  },
  {
    path: '/merchant-accounts',
    route: MerchentAccountRoutes,
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
    path: '/personalLoan',
    route: PersonalLoanRoutes,
  },
  {
    path: '/corporateLoan',
    route: CorporateLoanRoutes,
  },
  {
    path: '/educationLoan',
    route: CorporateLoanRoutes,
  },
  {
    path: '/loanScheme',
    route: LoanSchemeRoutes,
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
  {
    path: '/transactions',
    route: UserTransactionRoutes,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.route));
export default router;
