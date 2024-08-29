

const express = require("express")
const mysql = require("mysql")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")
const cookieParser = require("cookie-parser")
require('dotenv').config(); 
const salt = 10
const app = express()
app.use(express.json())
app.use(cookieParser())
const port = process.env.DB_PORT
 
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
})

const userController = {
    register: (req, res) => {
        const emailValid = "SELECT * FROM user WHERE emp_email = ?";
        const idValid = "SELECT * FROM user WHERE emp_id = ?";
        const sql = "INSERT INTO  user (`emp_name`,`emp_id`, `emp_email`, `emp_password`, `reporting_to`,`reporting_to_id`,`designation`, `department`) VALUES (?)"
        const values = [
            req.body.emp_name,
            req.body.emp_id,
            req.body.emp_email,
            req.body.emp_password,
            req.body.reporting_to,
            req.body.reporting_to_id,
            req.body.designation,
            req.body.department,
        ]

        db.query(emailValid, [req.body.emp_email], (err, result) => {
            if (err) {
                console.log(err)
            }
            if (result.length > 0) {
                return res.json({ Error: "Email Already Register" })
            } 
            db.query(idValid, [req.body.emp_id], (err, result) => {
                if (err) {
                    console.log(err)
                }
                if (result.length > 0) {
                    return res.json({ Error: "Employee ID Already Register" })
                }
                else{
                    db.query(sql, [values], (err, results) => {
                        if (!err) {
                            return res.json({ Status:"Success" })
                        } else {res.json({ Error: `Error for inserting data` })
                        }
                    })
                }  
            })
              
        })
    },

    login: (req, res) => {
        const sql = "SELECT * FROM user WHERE emp_email = ?";
        db.query(sql, [req.body.emp_email], (err, data) => {
            if (err) return res.json({ Error: "Error in server" });

            if (data.length > 0) {
                const user = data[0];

                // Compare plaintext password (NOT RECOMMENDED for real applications)
                if (req.body.emp_password === user.emp_password) {
                    const payload = {user};
                    const token = jwt.sign({ payload }, "jwt-secret-key", { expiresIn: '30d' });
                    res.cookie("token", token);
                    return res.json({ Status: "Success" , token });
                } else {
                    return res.json({ Error: "Passwords do not match." });
                }
            } else {
                // No user found with the provided email
                return res.json({ Error: "No user found with the provided email" });
            }
        });
    },
 
    logout: (req, res) => {
        res.clearCookie('token');
        return res.json({ Status: "Success" })
    }








}

module.exports = userController