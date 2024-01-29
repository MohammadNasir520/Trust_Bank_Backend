import express from 'express';
import { AuthRoutes } from '../modules/auth/auth.routes';

import { AccountRoutes } from '../modules/account/account.routes';
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
    path: '/accounts',
    route: AccountRoutes,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.route));
export default router;
