import  { server } from './server'
import   './database'
import * as fs from 'fs'

require("dotenv").config();

//axios api



//


server.start({port: process.env.PORT_SERVER }, ({port}) =>{
    console.log('>>>server API GraphQL on port', port, ' is connected!...')
})