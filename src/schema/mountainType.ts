import graphql from 'graphql';
const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
} = graphql;

const MountainType = new GraphQLObjectType({
  name:  'MountainType',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString }
  })
});

export default MountainType;
