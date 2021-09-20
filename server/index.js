import  { server } from './server'
import   './database'
require("dotenv").config();




server.start({port: process.env.PORT_SERVER }, ({port}) =>{
    console.log('>>>server API GraphQL on port', port, ' is connected!...')
})