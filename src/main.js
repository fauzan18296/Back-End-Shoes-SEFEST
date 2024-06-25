import express from 'express'
import db from './database-connection.js'
const app = express()
const port = 3000

app.listen(port, () => {
  console.log(`Server succes connected in port ${port}`)
})