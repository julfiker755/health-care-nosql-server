import { ErrorRequestHandler, NextFunction, Request, Response } from 'express';
import { ZodError } from 'zod';
import { TErrorSource } from '../interface/error';
import config from '../config';
import handleZodError from './handlezodError';
import hanldeValidationError from './handlevalidation';
import hanldeCastError from './hanldeCastError';
import hanldeDuplicateError from './hanldeDuplicateError';
import ApiError from './apiError';
import mongoose from 'mongoose';

const globalErrorHandler: ErrorRequestHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction,
): any => {
  let statusCode = 500;
  let message = err.message || 'Something went Wrong!';
  let errors: TErrorSource = [
    {
      path: '',
      message: 'Something went wrong',
    },
  ];

  // if(err instanceof mongoose.Error.ValidationError){
  //    console.log("show errro")
  // }

  if (err instanceof ZodError) {
    const simplifiedError = handleZodError(err);
    statusCode = simplifiedError.statusCode;
    message = simplifiedError.message;
    errors = simplifiedError.error;
  } else if (err?.name === 'ValidationError') {
    const simplifiedError = hanldeValidationError(err);
    statusCode = simplifiedError.statusCode;
    message = simplifiedError.message;
    errors = simplifiedError.error;
  } else if (err.code === 11000) {
    const simplifiedError = hanldeDuplicateError(err);
    statusCode = simplifiedError.statusCode;
    message = simplifiedError.message;
    errors = simplifiedError.error;
  }

//   else if(err.name === "CastError"){
//       const simplifiedError= hanldeCastError(err)
//       statusCode = simplifiedError.statusCode;
//       message = simplifiedError.message;
//       errors = simplifiedError.errors;
//   }
  else if (err instanceof ApiError) {
    statusCode = err.statusCode;
    message = err.message;
    errors = [
      {
        path: '',
        message: err.message,
      },
    ];
  }
  // else if(err instanceof Error){
  //     message = err.message;
  //     errors = [{
  //         path:'',
  //         message:err.message
  //     }]
  // }

  return res.status(statusCode).json({
    success: false,
    message: message,
    errors: errors,
    // stack:config.node_env === "development" ? err?.stack :null,
    // err
  });
};

export default globalErrorHandler;
