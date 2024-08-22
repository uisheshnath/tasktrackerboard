

const express = require("express")
const mysql = require("mysql")
const cors = require('cors')
const jwt = require("jsonwebtoken")
// const bcrypt = require("bcrypt")
const cookieParser = require("cookie-parser")
let port = 4000
const salt = 10
const app = express()
app.use(express.json())
app.use(cors({
    origin: ["http://localhost:3000"],
    methods: ["POST", "GET"],
    credentials: true
}
))
app.use(cookieParser())


const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "user@123",
    database: "updated_task_tracker_board"
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
                            return res.json(results)
                            res.json({ message: "data inserted" })
                        } else {
                            console.log(err);
                            res.json({ Error: `Error for inserting data` })
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
                    const name = { id: user.id, name: user.emp_name, email: user.emp_email }; // You can adjust this as needed
                    const token = jwt.sign({ name }, "jwt-secret-key", { expiresIn: '30d' });
                    res.cookie("token", token);
                    return res.json({ Status: "Success" });
                } else {
                    return res.json({ Error: "Passwords do not match." });
                }
            } else {
                // No user found with the provided email
                return res.json({ Error: "No user found with the provided email" });
            }
        });
    },

    userverify: (req, res) => {
        return res.json({ Status: "Success", name: req.emp_name, name: req.emp_email })
    },
    logout: (req, res) => {
        res.clearCookie('token');
        return res.json({ Status: "Success" })
    }








}

module.exports = userController