import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middlewares/auth';
import { LoanSchemeController } from './loanScheme.controller';
// import { CardValidation } from './Card.validation';

const router = express.Router();

router.post(
  '/',
  // auth(
  //   ENUM_USER_ROLE.ADMIN,
  //   ENUM_USER_ROLE.MANAGER,
  //   ENUM_USER_ROLE.CLIENT,
  //   ENUM_USER_ROLE.SUPER_ADMIN
  // ),
  // validateRequest(CardValidation.CreateZodSchema),
  LoanSchemeController.insertIntoDB
);

router.get('/', LoanSchemeController.getAllFromDB);
router.get('/scheme_category/:category', LoanSchemeController.getAllByCategoryFromDB);
router.get('/:id', LoanSchemeController.getByIdFromDB);

router.patch(
  '/:id',
  // auth(ENUM_USER_ROLE.ADMIN),
  // validateRequest(CardValidation.updateZodSchema),
  LoanSchemeController.updateIntoDB
);

router.delete('/:id', auth(ENUM_USER_ROLE.ADMIN), LoanSchemeController.deleteFromDB);
export const LoanSchemeRoutes = router;
