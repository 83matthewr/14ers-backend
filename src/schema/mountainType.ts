import graphql from 'graphql';
const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLInt,
  GraphQLList
} = graphql;
import RouteType from './routeType.ts';
import Mountain from '../models/mountain.ts';

// @ts-expect-error
const MountainType = new GraphQLObjectType({
  name:  'MountainType',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    elevation: { type: GraphQLInt },
    range: { type: GraphQLString },
    latitude: { type: GraphQLInt },
    longitude: { type: GraphQLInt },
    imgs: { type: new GraphQLList(GraphQLString) },
    routes: {
      type: new GraphQLList(RouteType),
      resolve(parentValue) {
        return Mountain.findById(parentValue).populate('route')
          .then(mountain => {
            console.log(mountain);
            if (mountain) return mountain.routes;
            else return [];
          });
      }
    }
  })
});

export default MountainType;
