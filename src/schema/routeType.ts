import graphql, { GraphQLFloat } from 'graphql';
const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLInt,
  GraphQLList
} = graphql;
import MountainType from './mountainType.ts';
import Route from '../models/route.ts';

const RouteType = new GraphQLObjectType({
  name:  'RouteType',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    mountain: { 
      type: MountainType,
      resolve(parentValue) {
          return Route.findById(parentValue).populate('mountain')
            .then(route => {
              if (route) return route.mountain;
              else return null;
            });
      }
    },
    class: { type: GraphQLInt },
    trailhead: { type: GraphQLString },
    start_elevation: { type: GraphQLInt },
    summit_elevation: { type: GraphQLInt },
    total_gain: { type: GraphQLInt },
    total_distance: { type: GraphQLFloat },
    imgs: { type: new GraphQLList(GraphQLString) }
  })
});

export default RouteType;