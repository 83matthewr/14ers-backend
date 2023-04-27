import graphql from 'graphql';
const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLInt,
  GraphQLList
} = graphql;
import WeatherType from './weatherType.ts';

const MountainType = new GraphQLObjectType({
  name:  'MountainType',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    elevation: { type: GraphQLInt },
    range: { type: GraphQLString },
    latitude: { type: GraphQLInt },
    longitude: { type: GraphQLInt },
    weather: { 
      type: WeatherType,
      resolve(parentValue) {
        async function getWeather() {
          const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${process.env.WEATHER_KEY}&q=${parentValue.latitude},${parentValue.longitude}&aqi=no`)
          const json = await response.json();
          const weather = {
            temp: json.current.temp_f,
            feelslike: json.current.feelslike_f,
            condition: json.current.condition.text,
            windspeed: json.current.wind_mph,
            winddirection: json.current.wind_dir,
            humidity: json.current.humidity
          };
          return weather;
        }
        return getWeather();
      } 
    },
    imgs: { type: new GraphQLList(GraphQLString) }
  })
});

export default MountainType;
