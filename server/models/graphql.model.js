import { makeExecutableSchema } from "graphql-tools";
import { resolvers } from "../libs/resolvers";

const typeDef = `

        type Query{
            hello:String
            greet(name : String!) : String
        }


`;

export default makeExecutableSchema({
  typeDefs: typeDef,
  resolvers: resolvers,
});
