import mysql from 'mysql';
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "db_back-end-shoes-lomba-sefest",
})

connection.connect(() => {
  try{
      console.log('Database connection is success!')
    }catch(error) {
      console.error(`Database connection is ${error}!`)
    }
  })
  export default connection