const { gql } = require('apollo-server-express');

const product = gql `

type Product {
    id: ID
    name: String!
    price: Int!
    color: String!
    imgPath: String
    category: Category
}

extend type Query {
    products: [Product]
    productDetail(id: ID!): Product
}

extend type Mutation {
    updateProduct(id: ID!, categoryId: String!, name: String!, price: Int!, color: String!, imgPath: String!): Product
    addProduct(categoryId: String, name: String!, price: Int, color: String!, imgPath: String): Product
    deleteProduct(id: ID!): Boolean!
} `


module.exports = product;