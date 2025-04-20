import { Schema, model } from 'mongoose';
import { Tuser } from './user.interface';
import { userRole, userStatus } from './user.constants';

const userSchema = new Schema<Tuser>(
  {
    email: { type: String, unique: true, required:[ true,"Email is required"] },
    password: { type: String, required: true },
    role: {
      type: String,
      enum: userRole,
    },
    status: {
      type: String,
      enum: userStatus,
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

