import { createHash } from 'crypto';
import { model, Schema } from 'mongoose';


export const hashPassword = (password: string) => {
  return createHash('sha256').update(password).digest('hex');
};

export interface User {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}
export const User = model(
  'User',
  new Schema<User>({
    firstName: String,
    lastName: String,
    email: String,
    password: String,
  }),
);