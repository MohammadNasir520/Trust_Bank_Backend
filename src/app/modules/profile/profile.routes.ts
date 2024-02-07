import express from 'express';
import auth from '../../middlewares/auth';
import { ProfileController } from './profle.controller';

const router = express.Router();

router.get('/', auth(), ProfileController.getAllFromDB);
router.patch('/', auth(), ProfileController.updateByIdFromDB);

export const ProfileRoutes = router;
