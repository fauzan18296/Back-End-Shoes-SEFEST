import mysql from 'mysql';
const connection = mysql.createConnection({
  host: 'localhost',
  username: 'root',
  password: '',
  database: 'db_back-end-shoes-lomba-sefest'
})

connection.connect((success) => {
  if(success) {
    console.log('Database success connected!')
  } else {
    console.log('Database connection is failed!')
  }
})
connection.end()
export default connection