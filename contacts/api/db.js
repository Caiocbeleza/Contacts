var mysql = require("mysql2/promise")


const conn = mysql.createPool({
    host:'localhost',
    user:'admin',
    password:'admin',
    database: 'contacts'
})


module.exports = conn