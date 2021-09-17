import express from "express";
import schema from "./models/graphql.model";
const { graphqlHTTP } = require("express-graphql");

import { connect } from './database'

const app = express();
//ejecutar conexion a base de datos
connect()


app.use(
  "/graphql",
  graphqlHTTP({
    graphiql: true,
    schema: schema,
    context: {
      messageId: 'test'
    }
  })
);

app.listen(4001, () => {
  console.log("server on port 4001");
});
