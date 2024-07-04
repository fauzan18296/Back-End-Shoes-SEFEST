import express from 'express'
import cors from 'cors'
import mysql from 'mysql';
import bodyParser from 'body-parser'
const app = express()
app.use(bodyParser.json({extended:true}))
app.use(bodyParser.json())
app.use(cors())

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "db_back-end-shoes-lomba-sefest",
})

db.connect(() => {
  try{
      console.log('Database connection is success!')
    }catch(error) {
      console.error(`Database connection is ${error}!`)
    }
  })
  
app.get('/', (req,res) => {
  res.send('Hello API!')
})

app.post('/comment' , (req , res) => {
  const username = req.body.username;
  const nickname = req.body.nickname;
  const comment =  req.body.comment;
  db.query(`INSERT INTO commentar(username,nickname,comment) VALUES('${username}','${nickname}','${comment}')`, (results) => {
      if(results) {
        res.send({results})
      }else {
      res.send({message: results})
      }
    }
  )
})

const port = 3000
app.listen(port, () => {
  console.log(`Server succes connected in port 3000!`)
})