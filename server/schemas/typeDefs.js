const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    bookCount: Int
    savedBooks: [Book]
  }

  type Book {
    BookId: ID
    authors: [String]
    description: String
    title: String
    image: String
    link: String
  }

  type Author {
      _id: ID
      name: String
  }

  type Query {
    me: User
    users: [User]
    user(username: String!): User
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(user: bookInfoInput): User
    removeBook(bookId: String!): User
  }

  input bookInfoInput {
      authors: [String!]
      description: String!
      title: String!
      bookId: ID!
      image: String!
      link: String!
  }
`;

// export the typeDefs
module.exports = typeDefs;