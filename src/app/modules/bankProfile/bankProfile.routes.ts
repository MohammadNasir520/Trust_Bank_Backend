import express from 'express';
import { BankProfileController } from './bankProfile.controller';
// import { BankProfileValidation } from './BankProfile.validation';

const router = express.Router();

router.post(
  '/',
  // auth(
  //   ENUM_USER_ROLE.ADMIN,
  //   ENUM_USER_ROLE.MANAGER,
  //   ENUM_USER_ROLE.CLIENT,
  //   ENUM_USER_ROLE.SUPER_ADMIN
  // ),
  // validateRequest(BankProfileValidation.CreateZodSchema),
  BankProfileController.insertIntoDB
);

router.get('/', BankProfileController.getAllFromDB);
router.get('/:id', BankProfileController.getByIdFromDB);

router.patch(
  '/:id',
  // auth(
  //   ENUM_USER_ROLE.ADMIN,
  //   ENUM_USER_ROLE.MANAGER,
  //   ENUM_USER_ROLE.CLIENT,
  //   ENUM_USER_ROLE.SUPER_ADMIN
  // ),
  // validateRequest(BankProfileValidation.updateZodSchema),
  BankProfileController.updateIntoDB
);

router.delete(
  '/:id',
  // auth(ENUM_USER_ROLE.ADMIN),
  BankProfileController.deleteFromDB
);
export const BankProfileRoutes = router;
