import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import connectToDB from './config/db.ts';

connectToDB()
    .then(() => console.log("Connected to MongoDB"))
    .catch(err => console.log(err));

import schema from './schema/schema.ts';

const server = new ApolloServer({
    schema: schema
});

const { url } = await startStandaloneServer(server, {
    listen: { port: 3000 },
});

console.log(`🚀  Server ready at: ${url}`);