import express from "express"
import schema from './models/graphql.model'
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');


const app =  express()



app.use('/graphql', graphqlHTTP({
    graphiql : true,
    schema : schema
}))

app.listen(4000, () => {
    console.log('server on port 4000'); 
})