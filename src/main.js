import express from 'express'
import cors from 'cors'
import db from './config.js'
import bodyParser from 'body-parser'
const app = express()
app.use(cors())
app.use(bodyParser.json({extended:true}))
app.use('/api/', (req, res, next) => {
  if (!req.is('application/json')) {
      // Send error here
      res.send(400);
  } else {
     app.post('/comment' , (req , res) => {
      const data = {
        username: req.body.username,
        nickname: req.body.nickname,
        comment: req.body.comment,
      }
      db.query(`INSERT INTO commentar(username,nickname,comment) VALUES('${data.username}','${data.nickname}','${data.comment}')`, (results) => {
          if(results) {
            res.send({results:data})
          }else {
          res.send({message: results})
          }
        }
      )
    })
  }
});


app.listen(3000, () => {
  console.log(`Server succes connected in port 3000!`)
})