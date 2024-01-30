import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middlewares/auth';
import { AccountController } from './account.controller';
// import { AccountValidation } from './account.validation';

const router = express.Router();

router.post(
  '/',
  auth(ENUM_USER_ROLE.CLIENT, ENUM_USER_ROLE.MANAGER),
  // validateRequest(AccountValidation.CreateZodSchema),
  AccountController.insertIntoDB
);

router.get('/', AccountController.getAllFromDB);
router.get('/:id', AccountController.getByIdFromDB);

router.patch(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN),
  // validateRequest(AccountValidation.updateZodSchema),
  AccountController.updateIntoDB
);

router.delete(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN),
  AccountController.deleteFromDB
);
export const AccountRoutes = router;
