import { Request, Response } from 'express';
import { User } from '../controllers/User';

/**
 * schema
 * @name createUser
 * @name getAllUsers
 * @name getUserById
 * @name updateUserById
 */
export const UserResolvers = {

    /**
    * @name createUser
    * @desc description here
    * @param {} param desc
    * @returns returns desc
    */

     createUser: async (parent:any, args:any, ctx:{req:any,res:any}, info:any): Promise<void | {}> => {
        return User.create(args);
    },

    /**
    * @name getAllUsers
    * @desc description here
    * @param {} param desc
    * @returns returns desc
    */

      getAllUsers: async (parent:any, args:any, ctx:{req:Request,res:Response}, info:any): Promise<void | []> => {
        return await User.findAll();
    },

    /**
    * @name getUserById
    * @desc description here
    * @param {} param desc
    * @returns returns desc
    */

      getUserById: async (parent:any, args:any, ctx:{req:Request,res:Response}, info:any): Promise<void | {}> => {
        const { user_id } = args;
        return await User.findOne(user_id);
    },

    /**
    * @name updateUserById
    * @desc description here
    * @param {} param desc
    * @returns returns desc
    */

      updateUserById: async (parent:any, args:any, ctx:{req:Request,res:Response}, info:any): Promise<void | {}> => {
         const data = {
             first_name: args.input.first_name,
             last_name: args.input.last_name,
             email: args.input.email,
            }

        return await User.findOneAndUpdate(args.input.user_id,data);
    }

}




