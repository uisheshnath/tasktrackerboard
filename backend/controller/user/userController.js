 

const express = require("express")
const mysql = require("mysql")
const cors = require('cors')
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")
const cookieParser = require("cookie-parser") 
let port=4000
const salt = 10
const app = express()
app.use(express.json())
app.use(cors({
    origin:["http://localhost:3000"],
    methods: ["POST","GET"],
    credentials:true
}
))
app.use(cookieParser())


const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"user@123",
    database:"authentication"
})

const userController = {
    register: (req, res)=>{
        const sql = "INSERT INTO  admin (`name`,`email`,`password`) VALUES (?)"
        bcrypt.hash(req.body.password.toString(), salt,(err,hash)=>{
            if(err) return res.json({Error:"Error for hasing password"})
            const values = [
                req.body.name,
                req.body.email,
                hash
            ]
            db.query(sql, [values], (err, results) => {
                if (!err) {
                    return res.json(results)
                    res.json({message:"data inserted"})
                } else {
                    console.log(err);
                    res.json({Error:`Error for inserting data`})
                }
            })
        })
       
     },

    login: (req, res)=>{
        const sql = "SELECT * FROM  admin WHERE email =? "
        db.query(sql, [req.body.email], (err, data) => {
            if (err) return res.json({ Error: "Error in server " })
            if (data.length > 0) {
                bcrypt.compare(req.body.password.toString(), data[0].password, (err, response) => {
                    if (err) return res.json({ Error: "Password compare Error " })
                    if (response) {
                        const name = data[0].name;
                        const email = data[0].email;
                        const token = jwt.sign({ name , email}, "jwt-secret-key", { expiresIn: '1d' });
                        res.cookie("token", token)
                        return res.json({ Status: `Success` })
                    } else {
                        return res.json({ Error: "Password not match" })
                    }
                })
            } else {
                // No user found with the provided email
                return res.json({ Error: "No user found with the provided email" });
            }
        })
    },

    userverify: (req,res)=>{
        return res.json({Status:"Success", name:req.name , name:req.email})
    },
   logout:(req, res)=>{
        res.clearCookie('token');
        return res.json({Status: "Success"})
    }

    
    

    
   


}

module.exports = userController