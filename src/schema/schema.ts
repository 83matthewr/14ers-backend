import graphql from 'graphql';
const { GraphQLSchema } = graphql;

import RootQueryType from './rootQuery.ts';
import mutations from './mutations.ts';

export default new GraphQLSchema({
  query: RootQueryType,
  mutation: mutations
});
