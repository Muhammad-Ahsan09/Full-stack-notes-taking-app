const mysql = require("mysql2")

const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "yourdatabasepassword",
    database: "notion"
    }

).promise()


module.exports = {pool}