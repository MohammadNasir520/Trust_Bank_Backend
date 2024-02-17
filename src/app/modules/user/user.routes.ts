import express from 'express';
import auth from '../../middlewares/auth';
import { UserController } from './user.controller';

const router = express.Router();

router.get('/', UserController.getAllFromDB);
router.get('/:id', UserController.getByIdFromDB);
router.patch('/:id', auth(), UserController.updateIntoDB);
router.delete('/:id', auth(), UserController.deleteFromDB);

export const UserRoutes = router;
