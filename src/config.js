import mysql from 'mysql';
const connection = mysql.createConnection({
  host: "localhost",
  user: "id22401126_db_elegant_shoe_shop",
  password: "aTBC3N+#aBX@.Yi",
  database: "id22401126_db_elegant_shoe_shop_api_1",
})

connection.connect(() => {
      console.log('Database connection is success!')
    });
  export default connection;