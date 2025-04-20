import { Request, Response } from "express";
import catchAsync from "../../shared/catchAsync";
import sendResponse from "../../shared/sendResponse";
import { adminService } from "./admin.serviec";
import httpStatus from 'http-status';



const adminStoreBD = catchAsync(async (req: Request, res: Response) => {
    const result = await adminService.adminStoreBD(req.body);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'admin store succesfully',
      data: result,
    });
  });
  
  
  export const adminController = {
    adminStoreBD
  };