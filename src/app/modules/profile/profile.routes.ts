import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middlewares/auth';
import { ProfileController } from './profle.controller';

const router = express.Router();

router.get(
  '/',
  auth(ENUM_USER_ROLE.CLIENT, ENUM_USER_ROLE.MANAGER),
  ProfileController.getAllFromDB
);
router.patch(
  '/',
  auth(
    ENUM_USER_ROLE.ADMIN,
    ENUM_USER_ROLE.SUPER_ADMIN,
    ENUM_USER_ROLE.CLIENT,
    ENUM_USER_ROLE.MANAGER
  ),
  ProfileController.updateByIdFromDB
);

export const ProfileRoutes = router;
