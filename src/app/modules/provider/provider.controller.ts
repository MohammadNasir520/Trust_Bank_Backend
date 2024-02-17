import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { ProviderServices } from './provider.service';

const insertProviderIntoDB = catchAsync(async (req: Request, res: Response) => {
  const result = await ProviderServices.insertProviderIntoDB(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Provider created successfully',
    data: result,
  });
});

const getProvidersFrom = catchAsync(async (req: Request, res: Response) => {
  const result = await ProviderServices.getProvidersFromDB();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Providers fetched successfully',
    data: result,
  });
});

export const ProviderController = {
  insertProviderIntoDB,
  getProvidersFrom,
};
