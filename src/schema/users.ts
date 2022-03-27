import { gql } from 'apollo-server-express';
export const userTypes = gql`
  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
  }
  type Query {
    currentUser: User
  }
  type Mutation {
    logout: Boolean
    requestToken(email: String!, password: String!): String
    signup(firstName: String!, lastName: String!, email: String!, password: String!): String
  }
`;
