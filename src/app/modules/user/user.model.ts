import { Schema, model} from 'mongoose';
import { Tuser } from './user.interface';
import { useRole, userStatus } from './user.constants';

const userSchema = new Schema<Tuser>(
  {
    id: { type: String, required: true },
    email: { type: String,unique:true, required: true },
    password: { type: String, required: true },
    role: {
      type: String,
      enum:useRole,
    },
    status: {
      type: String,
      enum:userStatus,
      default: 'active', 
    },
    needsPasswordChange: { type: Boolean, default: false },
    isDeleted: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  },
);

export const userModel = model<Tuser>('user', userSchema);
