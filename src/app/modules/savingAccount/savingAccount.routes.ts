import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middlewares/auth';
import { SavingAccountController } from './savingAccount.controller';

// import { SavingAccountValidation } from './SavingAccount.validation';

const router = express.Router();

router.post(
  '/',
  auth(),
  // validateRequest(SavingAccountValidation.CreateZodSchema),
  SavingAccountController.insertIntoDB
);

router.get('/', SavingAccountController.getAllFromDB);
router.get('/:id', SavingAccountController.getByIdFromDB);

router.patch(
  '/:id',
  auth(ENUM_USER_ROLE.CLIENT, ENUM_USER_ROLE.MANAGER),
  // validateRequest(SavingAccountValidation.updateZodSchema),
  SavingAccountController.updateIntoDB
);

router.delete(
  '/:id',
  // auth(ENUM_USER_ROLE.ADMIN),
  SavingAccountController.deleteFromDB
);
export const SavingAccountRoutes = router;
