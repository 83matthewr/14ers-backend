import { ResolversParentTypes } from "../../generated/graphql.ts"
import Mountain from "../../models/mountain.ts";

export default async (_: ResolversParentTypes, args: { name: String }) => {
    const newMountain = new Mountain({
        name: args.name
    });
    newMountain.save();
    return newMountain;
}