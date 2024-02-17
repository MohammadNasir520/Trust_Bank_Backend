import { Request, Response } from 'express';
import httpStatus from 'http-status';

import { loan_scheme_category } from '@prisma/client';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { LoanSchemeService } from './loanScheme.service';

const insertIntoDB = catchAsync(async (req: Request, res: Response) => {
  const result = await LoanSchemeService.insertIntoDB(req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Loan Scheme created successfully',
    data: result,
  });
});
const getAllFromDB = catchAsync(async (req: Request, res: Response) => {
  const result = await LoanSchemeService.getAllFromDB();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Loan Schemes fetched successfully',
    data: result,
  });
});
const getAllByCategoryFromDB = catchAsync(async (req: Request, res: Response) => {
  const { category } = req.params;
  const result = await LoanSchemeService.getAllByCategoryFromDB(category as loan_scheme_category);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Loan Schemes fetched successfully',
    data: result,
  });
});

const getByIdFromDB = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await LoanSchemeService.getByIdFromDB(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Loan Scheme fetched successfully',
    data: result,
  });
});

const updateIntoDB = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const payload = req.body;

  const result = await LoanSchemeService.updateIntoDB(id, payload);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Loan Scheme updated successfully',
    data: result,
  });
});
const deleteFromDB = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;

  const result = await LoanSchemeService.deleteFromDB(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Loan Scheme deleted successfully',
    data: result,
  });
});

export const LoanSchemeController = {
  insertIntoDB,
  getAllFromDB,
  getAllByCategoryFromDB,
  getByIdFromDB,
  updateIntoDB,
  deleteFromDB,
};
