const mysql = require("mysql2")

const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "your_database_password",
    database: "notion"
    }

).promise()


module.exports = {pool}