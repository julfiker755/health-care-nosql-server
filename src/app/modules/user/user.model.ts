import { Schema, model} from 'mongoose';
import { Tuser } from './user.interface';

const userSchema = new Schema<Tuser>(
  {
    id: { type: String, required: true },
    email: { type: String,unique:true, required: true },
    password: { type: String, required: true },
    role: {
      type: String,
      enum: ['admin', 'student', 'faculty'],
    },
    status: {
      type: String,
      enum: ['active', 'blocked', 'deleted'],
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
