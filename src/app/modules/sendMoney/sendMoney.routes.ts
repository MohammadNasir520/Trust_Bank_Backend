import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middlewares/auth';
import { SendMoneyController } from './sendMoney.controller';
// import { SendMoneyValidation } from './SendMoney.validation';

const router = express.Router();

router.post(
  '/',
  auth(
    ENUM_USER_ROLE.ADMIN,
    ENUM_USER_ROLE.MANAGER,
    ENUM_USER_ROLE.CLIENT,
    ENUM_USER_ROLE.SUPER_ADMIN
  ),
  // validateRequest(SendMoneyValidation.CreateZodSchema),
  SendMoneyController.insertIntoDB
);

router.get('/', SendMoneyController.getAllFromDB);
router.get('/:id', SendMoneyController.getByIdFromDB);

router.patch(
  '/:id',
  // auth(ENUM_USER_ROLE.ADMIN),
  // validateRequest(SendMoneyValidation.updateZodSchema),
  SendMoneyController.updateIntoDB
);

router.delete(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN),
  SendMoneyController.deleteFromDB
);
export const SendMoneyRoutes = router;
