import httpStatus from "http-status";

const handleDuplicateError = (err: any) => {
  const key = err?.keyPattern ? Object.keys(err.keyPattern)[0] : '';
  const value = err?.keyValue ? err.keyValue[key] : '';
  const error = [{
    path: key,
    message: `${key} already exists`
  }];

  return {
    statusCode: httpStatus.BAD_REQUEST,
    message: "Duplicate key error",
    error,
  };
};

export default handleDuplicateError;
