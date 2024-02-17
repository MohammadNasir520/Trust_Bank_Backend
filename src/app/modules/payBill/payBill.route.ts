import express from 'express';
import auth from '../../middlewares/auth';
import { PayBillController } from './payBill.controller';

const router = express.Router();

router.post('/', auth(), PayBillController.insertPayBillIntoDB);

router.get('/', auth(), PayBillController.getPayBillsFrom);

export const PayBillRoutes = router;
