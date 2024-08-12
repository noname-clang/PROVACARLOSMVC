import mysql from 'mysql2'
import "dotenv/config"
export const conn = mysql.createPool({

        connectionLimit : 10,
        host : process.env.mysql_host,
        user : process.env.mysql_user,
        password : process.env.mysql_password,
        database: process.env.mysql_database,
        port : process.env.mysql_port
})

conn.query('SELECT 1+1 AS solution ' , ( err , result, fields)=>{
    if(err){
        console.error(err)
        return
    }
    console.log('The solution is ' + result[0].solution)
})

export const handleError = (res, error, message) => {
    console.error(message, error);
    res.status(500).json({ message });
  };

export default conn;