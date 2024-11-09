import express from 'express'
import cors from 'cors'
import {config} from './src/config/index.js'
import { iApp } from './src/routes/index.js'
import Database from './src/db/database.js'


const app=express()
app.use(express.json())
app.use(cors())
 Database.connect(config.CONNECTION_DB)
app.use('/api',iApp)


app.listen(config.PORT,()=>{
    console.log("server is running",config.PORT)
})