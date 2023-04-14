import mongoose from "mongoose";
import graphql from 'graphql';
const { GraphQLObjectType, GraphQLString, GraphQLID } = graphql;
import Mountain from "../models/mountain.ts";
import MountainType from "./mountainType.ts";

const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    createMountain: {
      type: MountainType,
      args: {
        name: { type: GraphQLString }
      },
      resolve(parentValue, { name }) {
        return (new Mountain({ name })).save();
      }
    },
    deleteMountain: {
      type: MountainType,
      args: { id: { type: GraphQLID } },
      resolve(parentValue, { id }) {
        async function deleteMountain(id: String) {
          await Mountain.findOneAndRemove({ _id: id });
        }
        return deleteMountain(id);
      }
    }
  }
});

export default mutation;
