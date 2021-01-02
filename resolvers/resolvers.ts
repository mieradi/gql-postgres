import { UserResolvers } from "./UserResolvers";
export const resolvers = {
  Query: {
    getAllUsers: UserResolvers.getAllUsers,
    getUserById: UserResolvers.getUserById,
},
Mutation: {
    createUser: UserResolvers.createUser,
    updateUserById: UserResolvers.updateUserById,
  }
};
