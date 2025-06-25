const {pool} = require("../database.js") 

const signup = async (req, res) => {

    try{
        const {name, email, password} = req.body;

        if(!name || !email || !password){
            return res.status(400).json({message:"All fields are required"})
        }
    
        const response = await pool.query(`INSERT INTO users(name, email, password, signed_in) VALUES(?,?,?,?);`, [name, email, password, "true"]);

        const userid = response[0].insertId;


        const user = await pool.query("SELECT * FROM USERS WHERE user_id = ?", [userid])

    
        return res.status(201).json(user[0][0])
        
    } catch(error){
        console.log(error.message)

    }
    
}

const login = async (req, res) => {
    try{
        const {email, password} = req.body;

        if(!email || !password)
        {
            return res.status(400).json({message: "all fields are required"})
        }

        const user = await pool.query("Select * from users WHERE email = ? AND password = ?", [email, password]);
    

        if(!user)
        {
            return res.status(400).json({message: "Enter valid credentials"})
        }

        return res.status(200).json(user[0][0])

    } catch(error) {
        console.log(error.message)
    }
    
}

module.exports = {signup, login}