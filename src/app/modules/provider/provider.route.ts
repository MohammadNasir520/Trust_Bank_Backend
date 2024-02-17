import express from 'express';
import { ProviderController } from './provider.controller';

const router = express.Router();

router.post(
  '/',
  //   auth(ENUM_USER_ROLE.CLIENT, ENUM_USER_ROLE.MANAGER),
  // validateRequest(AccountValidation.CreateZodSchema),
  ProviderController.insertProviderIntoDB
);

router.get('/', ProviderController.getProvidersFrom);

export const ProviderRoutes = router;
