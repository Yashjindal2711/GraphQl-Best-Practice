const { gql } = require('apollo-server-express');

const product = gql `

type Product {
    id: ID
    category: String!
    productName: String!
    price: Int!
    color: String!
    imgPath: String
}

extend type Query {
    products: [Product]
    productDetail(id: ID!): Product
}

extend type Mutation {
    updateProduct(id: ID!, category: String!, productName: String!, price: Int!, color: String!, imgPath: String!): Product
    addProduct(category: String, productName: String!, price: Int, color: String!, imgPath: String): Product
    deleteProduct(id: ID!): Boolean!
} `


module.exports = product;