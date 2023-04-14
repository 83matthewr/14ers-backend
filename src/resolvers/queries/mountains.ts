import { QueryResolvers } from '../../generated/graphql.ts'
import Mountain from '../../models/mountain.ts';

const queries: QueryResolvers = {
  mountains: async () => {
    let mountains = await Mountain.find({});
    return mountains;
  }
};

export default queries;