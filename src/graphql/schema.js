
const { gql } = require('apollo-server-express');

const typeDefs = gql `

type Product {
    id: ID
    category: String!
    productName: String!
    price: Int!
    colors: [String!]
    imgPath: String
}

type Query {
    getProductsList: [Product]
    getProduct(id: ID!): Product
}

type Mutation {
    updateProduct(id: ID! ,category: String!, productName: String!, price: Int!, colors: [String!], imgPath: String!): Product
    addProduct(category: String, productName: String!, price: Int, colors: [String!], imgPath: String): Product
    deleteProduct(id: ID!): Boolean!
} `


module.exports = { typeDefs };