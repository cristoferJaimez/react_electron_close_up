import  { server } from './server'
import   './database'
require("dotenv").config();




server.start({port: process.env.PORT}, ({port}) =>{
    console.log('>>>server API GraphQL on port', port, ' is connected!...')
})