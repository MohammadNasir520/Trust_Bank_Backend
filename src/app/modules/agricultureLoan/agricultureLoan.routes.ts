import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middlewares/auth';
import { AgricultureLoanController } from './agricultureLoan.controller';
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
  AgricultureLoanController.insertIntoDB
);

router.get('/', AgricultureLoanController.getAllFromDB);
router.get('/:id', AgricultureLoanController.getByIdFromDB);

router.patch(
  '/:id',
  auth(
    ENUM_USER_ROLE.ADMIN,
    ENUM_USER_ROLE.MANAGER,
    ENUM_USER_ROLE.CLIENT,
    ENUM_USER_ROLE.SUPER_ADMIN
  ),
  // validateRequest(AgricultureLoanValidation.updateZodSchema),
  AgricultureLoanController.updateIntoDB
);

router.delete(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN),
  AgricultureLoanController.deleteFromDB
);
export const AgricultureLoanRoutes = router;
