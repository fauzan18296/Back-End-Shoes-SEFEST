import express from 'express'
import cors from 'cors'
import db from './config.js'
import bodyParser from 'body-parser'
const app = express()
app.use(cors())
app.use(bodyParser.json({extended:true}))

app.get('/' , (req , res) => {
 
})

app.listen(3000, () => {
  console.log(`Server succes connected in port 3000!`)
})