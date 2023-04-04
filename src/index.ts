import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { readFileSync } from 'fs';

const typeDefs = readFileSync('./src/types/schema.graphql', { encoding: 'utf-8' });

const mountains = [
    {
        id: '1234234324',
        name: 'Mt Elbert',
    },
    {
        id: '1234234325',
        name: 'Quandary Peak',
    },
];

const resolvers = {
    Query: {
      mountains: () => mountains
    },
  };

const server = new ApolloServer({
    typeDefs,
    resolvers,
});

const { url } = await startStandaloneServer(server, {
    listen: { port: 3000 },
});

console.log(`🚀  Server ready at: ${url}`);