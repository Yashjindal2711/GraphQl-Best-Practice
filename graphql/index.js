const { mergeTypeDefs, mergeResolvers } = require('@graphql-tools/merge');
const { gql } = require('apollo-server-express');
const { GraphQLScalarType, Kind } = require('graphql');

// simple DateTime scalar to serialize/parse JS Date as ISO string
const GraphQLDateTime = new GraphQLScalarType({
  name: 'DateTime',
  description: 'DateTime scalar serialized as ISO-8601 string',
  serialize(value) {
    // value from resolvers (Date object)
    if (value instanceof Date) return value.toISOString();
    return new Date(value).toISOString();
  },
  parseValue(value) {
    // value from client input
    return new Date(value);
  },
  parseLiteral(ast) {
    if (ast.kind === Kind.STRING) return new Date(ast.value);
    return null;
  }
});

const root = gql`
  scalar DateTime
  type Query
  type Mutation
`;

// all resolvers [ rs ] :-
const category_rs = require('./resolver/category');
const product_rs  = require('./resolver/product');

// all typeDefs [ tdf ] :-
const category_tdf = require('./typeDefs/category');
const product_tdf = require('./typeDefs/product');``

const types = [root, category_tdf, product_tdf];

const resolverMaps = [
  // handle modules that export { resolvers } or the resolver object directly
  (category_rs && category_rs.resolvers) ? category_rs.resolvers : category_rs,
  (product_rs && product_rs.resolvers) ? product_rs.resolvers : product_rs,
  { DateTime: GraphQLDateTime }
];

const typeDefs = mergeTypeDefs(types);
const resolvers = mergeResolvers(resolverMaps);

module.exports = { typeDefs, resolvers };



