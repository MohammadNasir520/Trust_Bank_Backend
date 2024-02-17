import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middlewares/auth';
import { PersonalLoanController } from './personalLoan.controller';
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
  PersonalLoanController.insertIntoDB
);

router.get('/', PersonalLoanController.getAllFromDB);
router.get('/:id', PersonalLoanController.getByIdFromDB);

router.patch(
  '/:id',
  auth(
    ENUM_USER_ROLE.ADMIN,
    ENUM_USER_ROLE.MANAGER,
    ENUM_USER_ROLE.CLIENT,
    ENUM_USER_ROLE.SUPER_ADMIN
  ),
  // validateRequest(AgricultureLoanValidation.updateZodSchema),
  PersonalLoanController.updateIntoDB
);

router.delete(
  '/:id',
  // auth(ENUM_USER_ROLE.ADMIN),
  PersonalLoanController.deleteFromDB
);
export const PersonalLoanRoutes = router;
