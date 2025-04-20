import { Types } from 'mongoose';
import { gender } from './admin.constants';

export type Tgender = typeof gender[number];
export type Tadmin = {
  id:Types.ObjectId;
  name: string;
  email: string;
  photo?: string;
  address: string;
  gender: Tgender;
  contactNumber: string;
  isDeleted?: boolean;
};
