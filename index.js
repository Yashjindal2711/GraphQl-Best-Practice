const dotenv = require('dotenv');
const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const cors = require('cors');
const { typeDefs } = require('./src/graphql/schema');
const { resolvers } = require('./src/graphql/resolver');
const { connectDB } = require('./src/config/database');
dotenv.config();

connectDB(process.env.DB_URL);

const app = express();
app.use(cors());

const server = new ApolloServer({ typeDefs, resolvers, introspection: true });

(async function startApollo() {
    try {
        await server.start();
        server.applyMiddleware({ app, path: '/graphql' });

        app.listen(process.env.PORT, () => {
            console.log(`Server is running at http://localhost:${process.env.PORT}/graphql`);
        });
    } catch (err) {
        console.error('Failed to start Apollo Server:', err);
        process.exit(1);
    }
})();