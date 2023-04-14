import mongoose from 'mongoose';
import graphql from 'graphql';
const { GraphQLObjectType, GraphQLList, GraphQLID, GraphQLNonNull } = graphql;
import MountainType from './mountainType.ts';
import Mountain from '../models/mountain.ts';

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: () => ({
    mountains: {
      type: new GraphQLList(MountainType),
      resolve() {
        async function getMountains() {
          return await Mountain.find({});
        }
        return getMountains();
      }
    },
    mountain: {
      type: MountainType,
      args: { id: { type: new GraphQLNonNull(GraphQLID) } },
      resolve(parentValue, { id }) {
        async function getMountain(id: String) {
          return await Mountain.findOne({ _id: id });
        }
        return getMountain(id);
      }
    }
  })
});

export default RootQuery;
