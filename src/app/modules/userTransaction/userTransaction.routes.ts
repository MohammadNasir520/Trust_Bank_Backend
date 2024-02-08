import express from 'express';
import { UserTransactionController } from './userTransaction.controller';
// import { UserTransactionValidation } from './UserTransaction.validation';

const router = express.Router();

router.get('/', UserTransactionController.getAllFromDB);
router.get('/:id', UserTransactionController.getByIdFromDB);

router.delete(
  '/:id',

  UserTransactionController.deleteFromDB
);
export const UserTransactionRoutes = router;
