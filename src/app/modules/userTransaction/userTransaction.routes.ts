import express from 'express';
import { UserTransactionController } from './userTransaction.controller';
// import { UserTransactionValidation } from './UserTransaction.validation';

const router = express.Router();

router.get(
  '/deposit_withdraw/deposit',
  UserTransactionController.getAllDepositFromDB
);
router.get(
  '/deposit_withdraw/withdraw',
  UserTransactionController.getAllWithdrawFromDB
);
router.get('/deposit_withdraw/:id', UserTransactionController.getByIdFromDB);

router.delete(
  '/:id',

  UserTransactionController.deleteFromDB
);
export const UserTransactionRoutes = router;
