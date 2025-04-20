import { gender } from './admin.constants';

export type Tgender = typeof gender[number];
export type Tadmin = {
  id: string;
  name: string;
  email: string;
  photo?: string;
  address: string;
  gender: Tgender;
  contactNumber: string;
  isDeleted?: boolean;
};
