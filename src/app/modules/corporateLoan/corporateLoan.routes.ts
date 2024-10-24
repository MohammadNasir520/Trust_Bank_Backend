import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middlewares/auth';
import { CorporateLoanController } from './corporateLoan.controller';
// import { AgricultureLoanValidation } from './AgricultureLoan.validation';

const router = express.Router();

router.post(
  '/',
  auth(
    ENUM_USER_ROLE.ADMIN,
    ENUM_USER_ROLE.MANAGER,
    ENUM_USER_ROLE.CLIENT,
    ENUM_USER_ROLE.SUPER_ADMIN
  ),
  // validateRequest(AgricultureLoanValidation.CreateZodSchema),
  CorporateLoanController.insertIntoDB
);

router.get('/', CorporateLoanController.getAllFromDB);
router.get('/:id', CorporateLoanController.getByIdFromDB);

router.patch(
  '/:id',
  auth(
    ENUM_USER_ROLE.ADMIN,
    ENUM_USER_ROLE.MANAGER,
    ENUM_USER_ROLE.CLIENT,
    ENUM_USER_ROLE.SUPER_ADMIN
  ),
  // validateRequest(AgricultureLoanValidation.updateZodSchema),
  CorporateLoanController.updateIntoDB
);

router.delete(
  '/:id',
  // auth(ENUM_USER_ROLE.ADMIN),
  CorporateLoanController.deleteFromDB
);
export const CorporateLoanRoutes = router;
