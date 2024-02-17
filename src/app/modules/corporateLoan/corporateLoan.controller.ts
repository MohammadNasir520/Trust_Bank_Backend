import { Request, Response } from 'express';
import httpStatus from 'http-status';

import { JwtPayload } from 'jsonwebtoken';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { CorporateLoanService } from './corporateLoan.service';

const insertIntoDB = catchAsync(async (req: Request, res: Response) => {
  const authUser = req.user as JwtPayload;
  const result = await CorporateLoanService.insertIntoDB(req.body, authUser);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'CorporateLoans created successfully',
    data: result,
  });
});
const getAllFromDB = catchAsync(async (req: Request, res: Response) => {
  const result = await CorporateLoanService.getAllFromDB();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'CorporateLoans fetched successfully',
    data: result,
  });
});

const getByIdFromDB = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await CorporateLoanService.getByIdFromDB(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'CorporateLoan fetched successfully',
    data: result,
  });
});

const updateIntoDB = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const payload = req.body;

  const result = await CorporateLoanService.updateIntoDB(id, payload);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'CorporateLoan updated successfully',
    data: result,
  });
});
const deleteFromDB = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;

  const result = await CorporateLoanService.deleteFromDB(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'CorporateLoan deleted successfully',
    data: result,
  });
});

export const CorporateLoanController = {
  insertIntoDB,
  getAllFromDB,
  getByIdFromDB,
  updateIntoDB,
  deleteFromDB,
};
