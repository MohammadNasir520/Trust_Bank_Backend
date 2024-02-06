import express from 'express';
// import validateRequest from '../../middlewares/validateRequest';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middlewares/auth';
import { UserBalanceController } from './userBalance.controller';
// import { UserBalanceValidation } from './UserBalance.validation';

const router = express.Router();

router.post(
  '/user-deposit',
  auth(
    ENUM_USER_ROLE.ADMIN,
    ENUM_USER_ROLE.MANAGER,
    ENUM_USER_ROLE.CLIENT,
    ENUM_USER_ROLE.SUPER_ADMIN
  ),
  // validateRequest(UserBalanceValidation.CreateZodSchema),
  UserBalanceController.insertIntoDB
);
router.post(
  '/user-withdraw',
  auth(
    ENUM_USER_ROLE.ADMIN,
    ENUM_USER_ROLE.MANAGER,
    ENUM_USER_ROLE.CLIENT,
    ENUM_USER_ROLE.SUPER_ADMIN
  ),
  // validateRequest(UserBalanceValidation.CreateZodSchema),
  UserBalanceController.userWithdraw
);

router.get('/', UserBalanceController.getAllFromDB);
router.get('/:id', UserBalanceController.getByIdFromDB);

router.delete(
  '/:id',
  // auth(ENUM_USER_ROLE.ADMIN),
  UserBalanceController.deleteFromDB
);
export const UserBalanceRoutes = router;
