import { Request, Response } from 'express';
import httpStatus from 'http-status';

import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { AccountService } from './account.service';

const insertIntoDB = catchAsync(async (req: Request, res: Response) => {
  const result = await AccountService.insertIntoDB(req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Accounts created successfully',
    data: result,
  });
});
const getAllFromDB = catchAsync(async (req: Request, res: Response) => {
  const result = await AccountService.getAllFromDB();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Accounts fetched successfully',
    data: result,
  });
});

const getByIdFromDB = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await AccountService.getByIdFromDB(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Account fetched successfully',
    data: result,
  });
});

const updateIntoDB = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const payload = req.body;

  const result = await AccountService.updateIntoDB(id, payload);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Account updated successfully',
    data: result,
  });
});
const deleteFromDB = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;

  const result = await AccountService.deleteFromDB(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Account deleted successfully',
    data: result,
  });
});

export const AccountController = {
  insertIntoDB,
  getAllFromDB,
  getByIdFromDB,
  updateIntoDB,
  deleteFromDB,
};
