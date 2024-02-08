import { Request, Response } from 'express';
import httpStatus from 'http-status';

import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { UserTransactionService } from './userTransaction.service';

const getAllFromDB = catchAsync(async (req: Request, res: Response) => {
  const result = await UserTransactionService.getAllFromDB();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'UserTransactions fetched successfully',
    data: result,
  });
});

const getByIdFromDB = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await UserTransactionService.getByIdFromDB(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'DebitCreditUserTransaction fetched successfully',
    data: result,
  });
});

const deleteFromDB = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;

  const result = await UserTransactionService.deleteFromDB(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'DebitCreditUserTransaction deleted successfully',
    data: result,
  });
});

export const UserTransactionController = {
  getAllFromDB,
  getByIdFromDB,
  deleteFromDB,
};
