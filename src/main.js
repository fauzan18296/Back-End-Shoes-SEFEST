import express from 'express'
import cors from 'cors'
import db from './config.js'
import bodyParser from 'body-parser'
const app = express()
app.use(cors())
app.use(bodyParser.json({extended:true}))

app.post('/comment' , (req , res) => {
  const data = {
    username: req.body.username,
    nickname: req.body.nickname,
    comment: req.body.comment,
  }
  db.query(`INSERT INTO commentar(username,nickname,comment) VALUES('${data.username}', '${data.nickname}', '${data.comment}')`, (results) => {
      if(results) {
        res.json({result: results})
      }else {
        res.json({message: 'Must Details!'})
      }
    }
  )
})

app.listen(3000, () => {
  console.log(`Server succes connected in port 3000!`)
})