import mongoose from 'mongoose';
import { adminModel } from './admin.model';
import { userRole } from '../user/user.constants';
import { userModel } from '../user/user.model';



const adminGetBD=async()=>{
  const result=await adminModel.find().populate('user')
  return result
}

// adminStoreBD
const adminStoreBD = async (payload: any) => {
  const { email, password, ...others } = payload;

  const userPayload = {
    email: email,
    password: password,
    role: userRole[1],
  };
  const adminPayload={
    email:email,
    ...others,
  }


  const session = await mongoose.startSession();
  try {
    session.startTransaction();
    // Transaction-1
    const [user] = await userModel.create([userPayload], { session });
    // Transaction-2    
    Object.assign(adminPayload, { id: user._id });
    const [admin]= await adminModel.create([adminPayload], { session });
    // end transaction
    await session.commitTransaction();
    session.endSession();
    return admin;
  } catch(err:any) {
    await session.abortTransaction(); 
    throw new Error(err.message || 'Transaction failed');
  }
};

export const adminService = {
  adminStoreBD,
  adminGetBD
};
