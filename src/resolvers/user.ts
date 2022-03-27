import { createHash } from 'crypto';
import { sign } from 'jsonwebtoken';
import { User } from '../models/User';

if(!process.env.AUTHENTICATIONSECRET){
  throw new Error("No process.env.AUTHENTICATIONSECRET")
}

export const hashPassword = (password: string) => {
  return createHash('sha256').update(password).digest('hex');
};

export const userResolvers = {
  Query: {
    currentUser: (parent, args, context) => context.user,
  },
  Mutation: {
    logout: (parent, args, context) => context.logout(),
    requestToken: async (parent, { email, password }, context) => {
      //throw new Error('to be implemented later');
      const user = await User.findOne({email: email});
      if (!user){
        throw new Error('Wrong');
      } 
      if(user.password === hashPassword(password)){
        return sign(user.toJSON(), process.env.AUTHENTICATIONSECRET!);
      }
      throw new Error('Wrong')
    },
    signup: async (parent, { firstName, lastName, email, password }, context) => {
      const userWithEmailAlreadyExists = await User.findOne({email: email});
      if (userWithEmailAlreadyExists) {
        throw new Error('User with email already exists');
      }
      const newUser = {
        firstName,
        lastName,
        email,
        password: hashPassword(password),
      };
      await new User(newUser).save();
      return sign(newUser, process.env.AUTHENTICATIONSECRET!);
    },
  },
};
