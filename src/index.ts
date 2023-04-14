import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { readFileSync } from 'fs';
import connectToDB from './config/db.ts';

connectToDB()
    .then(() => console.log("Connected to MongoDB"))
    .catch(err => console.log(err));

const typeDefs = readFileSync('./src/types/schema.graphql', { encoding: 'utf-8' });
import resolvers from './resolvers/index.ts';

const server = new ApolloServer({
    typeDefs,
    resolvers,
});

const { url } = await startStandaloneServer(server, {
    listen: { port: 3000 },
});

console.log(`🚀  Server ready at: ${url}`);