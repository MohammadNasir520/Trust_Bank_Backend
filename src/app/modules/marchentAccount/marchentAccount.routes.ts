import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middlewares/auth';
import { MerchentAccountController } from './marchentAccount.controller';

// import { MerchentAccountValidation } from './MerchentAccount.validation';

const router = express.Router();

router.post(
  '/',
  auth(),
  // validateRequest(MerchentAccountValidation.CreateZodSchema),
  MerchentAccountController.insertIntoDB
);

router.get('/', MerchentAccountController.getAllFromDB);
router.get('/:id', MerchentAccountController.getByIdFromDB);

router.patch(
  '/:id',
  auth(ENUM_USER_ROLE.CLIENT, ENUM_USER_ROLE.MANAGER),
  // validateRequest(MerchentAccountValidation.updateZodSchema),
  MerchentAccountController.updateIntoDB
);

router.delete(
  '/:id',
  // auth(ENUM_USER_ROLE.ADMIN),
  MerchentAccountController.deleteFromDB
);
export const MerchentAccountRoutes = router;