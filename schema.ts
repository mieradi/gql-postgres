const { gql } = require('apollo-server-express');
const DateType = require('./scalars/Date');

export const typeDefs = gql`

    scalar DateType

    # User Inputs
    input CreateUserInput {
        first_name: String!
        last_name: String!
        email: String!
        password: String!
        confirm_password: String!
    }

    input UpdateUserInput {
        user_id: ID!
        first_name: String
        last_name: String
        email: String
    }

    # User Types
    type User {
        user_id: ID
        first_name: String!
        last_name: String!
        email: String!
        created_at: String!
        updated_at: String!
    }

    type Query {
        # User Queries
        getAllUsers: [User!]
        getUserById(user_id:ID!): User!
    }
    type Mutation {
        # User Mutations
        createUser(input: CreateUserInput!): User!
        updateUserById(input: UpdateUserInput): User!
    }
`;





