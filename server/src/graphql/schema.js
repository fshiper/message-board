const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Query {
    info: String!
    threads: [Thread!]!
    boardThreads(board: String!): [Thread!]!
  }

  type Thread {
    id: ID!
    board: String!
    text: String!
    delete_password: String!
    created_on: String
    bumped_on: String
    reported: String
    replies: [Reply!]!
  }
  type Reply {
    text: String!
    created_on: String!
    delete_password: String!
    reported: String!
  }
`;
module.exports = {
  typeDefs,
};
