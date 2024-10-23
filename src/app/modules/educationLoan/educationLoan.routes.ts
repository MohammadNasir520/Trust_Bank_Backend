import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middlewares/auth';
import { EducationLoanController } from './educationLoan.controller';
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
  EducationLoanController.insertIntoDB
);

router.get('/', EducationLoanController.getAllFromDB);
router.get('/:id', EducationLoanController.getByIdFromDB);

router.patch(
  '/:id',
  auth(
    ENUM_USER_ROLE.ADMIN,
    ENUM_USER_ROLE.MANAGER,
    ENUM_USER_ROLE.CLIENT,
    ENUM_USER_ROLE.SUPER_ADMIN
  ),
  // validateRequest(AgricultureLoanValidation.updateZodSchema),
  EducationLoanController.updateIntoDB
);

router.delete(
  '/:id',
  // auth(ENUM_USER_ROLE.ADMIN),
  EducationLoanController.deleteFromDB
);
export const EducationLoanRoutes = router;
