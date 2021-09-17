const tools = require('graphql-tools/index')
import { resolvers } from "../libs/resolvers";

const typeDef = `
        type Query{
            hello:String
            greet(name : String!) : String
            users: [User]
        }


        type User{
          _id: ID!
          nombres: String!
          documento: Int!
          correo: String!
          pw: String!
          rol: String!
          img: String!
        }


        type Mutation{

          createUser(input: UserInput): User
          deleteUser(_id: ID): User
          updateUser(_id: ID, input: UserInput): User

        }

        
        input UserInput{
          nombres: String!
          documento: Int!
          correo: String!
          pw: String!
          rol: String!
          img: String!
        }

`;

export default  tools.makeExecutableSchema({
  typeDefs: typeDef,
  resolvers: resolvers,
});
