import express from 'express';
import cors from 'cors';
import mysql from 'mysql';
import bodyParser from 'body-parser';

const app = express();
app.use(bodyParser.json());
app.use(cors());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "db_back-end-shoes-lomba-sefest",
});

db.connect((error) => {
  if (error) {
    console.error(`Database connection error: ${error.message}`);
  } else {
    console.log('Database connection is successful!');
  }
});

app.get('/', (req, res) => {
  res.send('Hello API!');
});

app.post('/comment', (req, res) => {
  const queries = 'INSERT INTO commentar (username, nickname, comment) VALUES (?, ?, ?)';
  const { username, nickname, comment } = req.body;

  db.query(queries, [username, nickname, comment], (error, results) => {
    if (error) {
      res.status(500).send({ error: error.message });
    } else {
      res.status(201).send({ message: 'Comment added successfully!', results });
    }
  });
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server successfully connected on port ${port}!`);
});
