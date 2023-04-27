import graphql from 'graphql';
const {
  GraphQLObjectType,
  GraphQLFloat,
  GraphQLString,
  GraphQLInt,
} = graphql;

const WeatherType = new GraphQLObjectType({
  name:  'WeatherType',
  fields: () => ({
    temp: { type: GraphQLFloat },
    feelslike: { type: GraphQLFloat },
    condition: { type: GraphQLString },
    windspeed: { type: GraphQLFloat },
    winddirection: { type: GraphQLString },
    humidity: { type: GraphQLInt }
  })
});

export default WeatherType;
