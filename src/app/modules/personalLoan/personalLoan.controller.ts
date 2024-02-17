import { Request, Response } from 'express';
import httpStatus from 'http-status';

import { JwtPayload } from 'jsonwebtoken';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { PersonalLoanService } from './personalLoan.service';

const insertIntoDB = catchAsync(async (req: Request, res: Response) => {
  const authUser = req.user as JwtPayload;
  const result = await PersonalLoanService.insertIntoDB(req.body, authUser);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'PersonalLoans created successfully',
    data: result,
  });
});
const getAllFromDB = catchAsync(async (req: Request, res: Response) => {
  const result = await PersonalLoanService.getAllFromDB();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'PersonalLoans fetched successfully',
    data: result,
  });
});

const getByIdFromDB = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await PersonalLoanService.getByIdFromDB(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'PersonalLoan fetched successfully',
    data: result,
  });
});

const updateIntoDB = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const payload = req.body;

  const result = await PersonalLoanService.updateIntoDB(id, payload);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'PersonalLoan updated successfully',
    data: result,
  });
});
const deleteFromDB = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;

  const result = await PersonalLoanService.deleteFromDB(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'PersonalLoan deleted successfully',
    data: result,
  });
});

export const PersonalLoanController = {
  insertIntoDB,
  getAllFromDB,
  getByIdFromDB,
  updateIntoDB,
  deleteFromDB,
};
