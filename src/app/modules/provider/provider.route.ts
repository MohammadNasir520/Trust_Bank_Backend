import express from 'express';
import auth from '../../middlewares/auth';
import { ProviderController } from './provider.controller';

const router = express.Router();

router.post('/', auth(), ProviderController.insertProviderIntoDB);

router.get('/', auth(), ProviderController.getProvidersFrom);

export const ProviderRoutes = router;
