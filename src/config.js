import mysql from 'mysql';
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "db_back-end-shoes-lomba-sefest",
})

connection.connect(() => {
      console.log('Database connection is success!')
    });
  export default connection;