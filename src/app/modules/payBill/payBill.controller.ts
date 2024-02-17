import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { PayBillServices } from './payBill.service';

const insertPayBillIntoDB = catchAsync(async (req: Request, res: Response) => {
  const result = await PayBillServices.insertPayBillIntoDB(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'PayBill created successfully',
    data: result,
  });
});

const getPayBillsFrom = catchAsync(async (req: Request, res: Response) => {
  const result = await PayBillServices.getPayBillsFromDB();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'PayBills fetched successfully',
    data: result,
  });
});

export const PayBillController = {
  insertPayBillIntoDB,
  getPayBillsFrom,
};
