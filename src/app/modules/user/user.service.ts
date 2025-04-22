import { jwtHelpers } from '../../../helpers/jwtHelpers';
import { BcryptCompare, BcryptStore } from '../../../ulits';
import config from '../../config';
import ApiCustomError from '../../errors/apiCustomError';
import { userModel } from './user.model';

const loginUserBD = async (payload: any) => {
    const {email, password} = payload;
  const result = await userModel.findOne({ email:email });
  if (!result) {
    throw new ApiCustomError('user email Error', [
      {
        field: 'email',
        code: 'invalid_type',
        message: 'User not found',
      },
    ]);
  }
  if(password){
    const passwordMatch = await BcryptCompare(password, result?.password);
    if(!passwordMatch){
      throw new ApiCustomError('user password Error', [
        {
          field: 'password',
          code: 'invalid_type',
          message: 'User password not match',
        },
      ]);  
    }
  }
  const payloadData = {
    email: result?.email,
    role: result?.role,
  };
  const accessToken = jwtHelpers.generateToken(
    payloadData,
    config.jwt.secret,
    config.jwt.accessTokenExp,
  );
  const refreshToken = jwtHelpers.generateToken(
    payloadData,
    config.jwt.secret,
    config.jwt.refreshTokenExp,
  );

  return {
    accessToken,
    refreshToken,
    needsPasswordChange: result?.needsPasswordChange,
  };
};
export const userService = {
  loginUserBD,
};
