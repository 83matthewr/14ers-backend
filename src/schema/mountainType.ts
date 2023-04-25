import graphql from 'graphql';
const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLInt,
  GraphQLList
} = graphql;

const MountainType = new GraphQLObjectType({
  name:  'MountainType',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    elevation: { type: GraphQLInt },
    range: { type: GraphQLString },
    latitude: { type: GraphQLInt },
    longitude: { type: GraphQLInt },
    imgs: { type: new GraphQLList(GraphQLString) }
  })
});

export default MountainType;
