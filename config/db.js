const mysql = require('mysql2');
require("dotenv").config();

const pool = mysql.createPool({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
});

const sql = 'select * from `buyers`'

pool.execute(sql,(err , res)=>{
    if(err) throw err;
   console.log(res);
} )



module.exports = pool.promise();