import { gql } from 'apollo-server';

// gql types, query and mutation
// mutation = operation to do (add, edit ...)
// query = get data

export const seedDdTypes = gql`
  extend type Query {
    seedDb(name: String): Boolean
  }
  
`;
