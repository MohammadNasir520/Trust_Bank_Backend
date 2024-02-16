import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middlewares/auth';
import { CurrentAccountController } from './currentAccount.controller';

// import { CurrentAccountValidation } from './CurrentAccount.validation';

const router = express.Router();

router.post(
  '/',
  auth(),
  // validateRequest(CurrentAccountValidation.CreateZodSchema),
  CurrentAccountController.insertIntoDB
);

router.get('/', CurrentAccountController.getAllFromDB);
router.get('/:id', CurrentAccountController.getByIdFromDB);

router.patch(
  '/:id',
  auth(ENUM_USER_ROLE.CLIENT, ENUM_USER_ROLE.MANAGER),
  // validateRequest(CurrentAccountValidation.updateZodSchema),
  CurrentAccountController.updateIntoDB
);

router.delete(
  '/:id',
  // auth(ENUM_USER_ROLE.ADMIN),
  CurrentAccountController.deleteFromDB
);
export const CurrentAccountRoutes = router;
