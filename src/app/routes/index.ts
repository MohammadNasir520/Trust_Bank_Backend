import express from 'express';
import { AuthRoutes } from '../modules/auth/auth.routes';

import { AccountRoutes } from '../modules/account/account.routes';
import { DebitCreditCardRoutes } from '../modules/debitCreditCard/debitCreditCard.routes';
import { ProfileRoutes } from '../modules/profile/profile.routes';
import { UserRoutes } from '../modules/user/user.routes';

const router = express.Router();

const moduleRoutes = [
  // ... routes
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
    path: '/debitCreditCards',
    route: DebitCreditCardRoutes,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.route));
export default router;
