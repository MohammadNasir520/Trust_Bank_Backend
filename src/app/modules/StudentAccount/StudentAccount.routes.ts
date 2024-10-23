import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middlewares/auth';
import { StudentAccountController } from './StudentAccount.controller';

// import { StudentAccountValidation } from './StudentAccount.validation';

const router = express.Router();

router.post(
  '/',
  auth(),
  // validateRequest(StudentAccountValidation.CreateZodSchema),
  StudentAccountController.insertIntoDB
);

router.get('/', StudentAccountController.getAllFromDB);
router.get('/:id', StudentAccountController.getByIdFromDB);

router.patch(
  '/:id',
  auth(ENUM_USER_ROLE.CLIENT, ENUM_USER_ROLE.MANAGER),
  // validateRequest(StudentAccountValidation.updateZodSchema),
  StudentAccountController.updateIntoDB
);

router.delete(
  '/:id',
  // auth(ENUM_USER_ROLE.ADMIN),
  StudentAccountController.deleteFromDB
);
export const StudentAccountRoutes = router;
