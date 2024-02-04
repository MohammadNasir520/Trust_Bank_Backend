import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middlewares/auth';
import validateRequest from '../../middlewares/validateRequest';
import { BankBalanceController } from './bankBalance.controller';
import { BankBalanceValidation } from './bankBalance.validation';
// import { BankBalanceValidation } from './BankBalance.validation';

const router = express.Router();

router.post(
  '/',
  // auth(
  //   ENUM_USER_ROLE.ADMIN,
  //   ENUM_USER_ROLE.MANAGER,
  //   ENUM_USER_ROLE.CLIENT,
  //   ENUM_USER_ROLE.SUPER_ADMIN
  // ),
  validateRequest(BankBalanceValidation.CreateZodSchema),
  BankBalanceController.insertIntoDB
);

router.get('/', BankBalanceController.getAllFromDB);
router.get('/:id', BankBalanceController.getByIdFromDB);

router.patch(
  '/:id',
  auth(
    ENUM_USER_ROLE.ADMIN,
    ENUM_USER_ROLE.MANAGER,
    ENUM_USER_ROLE.CLIENT,
    ENUM_USER_ROLE.SUPER_ADMIN
  ),
  validateRequest(BankBalanceValidation.updateZodSchema),
  BankBalanceController.updateIntoDB
);

router.delete(
  '/:id',
  // auth(ENUM_USER_ROLE.ADMIN),
  BankBalanceController.deleteFromDB
);
export const BankBalanceRoutes = router;
