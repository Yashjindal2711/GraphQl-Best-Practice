const { gql } = require('apollo-server-express');

const category = gql `

type Category {
    id: ID
    name: String!
    image: String!
    is_delete: Boolean
    createdAt : DateTime
}

extend type Query {
    categories: [Category]
    categoryDetail(id: ID!): Category
}

extend type Mutation {
    updateCategory(id: ID!, name: String!, image: String!): Category
    addCategory(name: String!, image: String!): Category
    deleteCategory(id: ID!): Boolean!
} `


module.exports = category;