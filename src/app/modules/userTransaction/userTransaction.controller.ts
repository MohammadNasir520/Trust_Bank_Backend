import { Request, Response } from 'express';
import httpStatus from 'http-status';

import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { UserTransactionService } from './userTransaction.service';

const getAllDepositFromDB = catchAsync(async (req: Request, res: Response) => {
  const result = await UserTransactionService.getAllDepositFromDB();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'UserTransactions fetched successfully',
    data: result,
  });
});
const getAllWithdrawFromDB = catchAsync(async (req: Request, res: Response) => {
  const result = await UserTransactionService.getAllWithdrawFromDB();
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
    message: 'UserTransaction fetched successfully',
    data: result,
  });
});

const deleteFromDB = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;

  const result = await UserTransactionService.deleteFromDB(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'UserTransaction deleted successfully',
    data: result,
  });
});

export const UserTransactionController = {
  getAllDepositFromDB,
  getAllWithdrawFromDB,
  getByIdFromDB,
  deleteFromDB,
};
