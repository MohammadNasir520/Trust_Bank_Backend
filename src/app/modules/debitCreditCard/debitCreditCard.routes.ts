import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middlewares/auth';
import { DebitCreditCardController } from './debitCreditCard.controller';
// import { DebitCreditCardValidation } from './DebitCreditCard.validation';

const router = express.Router();

router.post(
  '/',
  // auth(ENUM_USER_ROLE.ADMIN),
  // validateRequest(DebitCreditCardValidation.CreateZodSchema),
  DebitCreditCardController.insertIntoDB
);

router.get('/', DebitCreditCardController.getAllFromDB);
router.get('/:id', DebitCreditCardController.getByIdFromDB);

router.patch(
  '/:id',
  // auth(ENUM_USER_ROLE.ADMIN),
  // validateRequest(DebitCreditCardValidation.updateZodSchema),
  DebitCreditCardController.updateIntoDB
);

router.delete(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN),
  DebitCreditCardController.deleteFromDB
);
export const DebitCreditCardRoutes = router;
