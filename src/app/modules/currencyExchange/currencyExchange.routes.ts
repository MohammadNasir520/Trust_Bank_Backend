import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middlewares/auth';
import { CurrencyExchangeController } from './currencyExchange.controller';

const router = express.Router();

router.post(
  '/',
  auth(
    ENUM_USER_ROLE.ADMIN,
    ENUM_USER_ROLE.MANAGER,
    ENUM_USER_ROLE.CLIENT,
    ENUM_USER_ROLE.SUPER_ADMIN
  ),
  // validateRequest(CurrencyExchangeValidation.CreateZodSchema),
  CurrencyExchangeController.insertIntoDB
);

router.get('/', CurrencyExchangeController.getAllFromDB);
router.get('/:id', CurrencyExchangeController.getByIdFromDB);

router.delete(
  '/:id',
  // auth(ENUM_USER_ROLE.ADMIN),
  CurrencyExchangeController.deleteFromDB
);
export const CurrencyExchangeRoutes = router;
