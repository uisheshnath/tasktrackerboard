

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
    // register: (req, res) => {
    //     const emailValid = "SELECT * FROM user WHERE emp_email = ?";
    //     const idValid = "SELECT * FROM user WHERE emp_id = ?";
    //     const sql = "INSERT INTO  user (`emp_name`,`emp_id`, `emp_email`, `emp_password`, `reporting_to`,`reporting_to_id`,`designation`, `department`) VALUES (?)"
    //     const values = [
    //         req.body.emp_name,
    //         req.body.emp_id,
    //         req.body.emp_email,
    //         req.body.emp_password,
    //         req.body.reporting_to,
    //         req.body.reporting_to_id,
    //         req.body.designation,
    //         req.body.department,
    //     ]

    //     db.query(emailValid, [req.body.emp_email], (err, result) => {
    //         if (err) {
    //             console.log(err)
    //         }
    //         if (result.length > 0) {
    //             return res.json({ Error: "Email Already Register" })
    //         }
    //         db.query(idValid, [req.body.emp_id], (err, result) => {
    //             if (err) {
    //                 console.log(err)
    //             }
    //             if (result.length > 0) {
    //                 return res.json({ Error: "Employee ID Already Register" })
    //             }
    //             else {
    //                 db.query(sql, [values], (err, results) => {
    //                     if (!err) {
    //                         return res.json({ Status: "Success" })
    //                     } else {
    //                         res.json({ Error: `Error for inserting data` })
    //                     }
    //                 })
    //             }
    //         })

    //     })
    // },

    login: (req, res) => {
        const sql = "SELECT * FROM user WHERE emp_email = ?";
        db.query(sql, [req.body.emp_email], (err, data) => {
            if (err) return res.json({ Error: "Error in server" });

            if (data.length > 0) {
                const user = data[0];
                // Compare plaintext password (NOT RECOMMENDED for real applications)
                if (req.body.emp_password === user.emp_password) {
                    const payload = { user };
                    const token = jwt.sign({ payload }, "jwt-secret-key", { expiresIn: '30d' });
                    res.cookie("token", token);
                    return res.json({ Status: "Success", token });
                } else {
                    return res.json({ Error: "Passwords do not match." });
                }
            } else {
                return res.json({ Error: "No user found with the provided email" });
            }
        });
    },
    login_user: (req, res) => {
        const sql = "SELECT * FROM user"
        db.query(sql, (err, result) => {
            if (err) return res.json({ Message: "Error" });
            return res.json(result)
        })
    },
    logout: (req, res) => {
        res.clearCookie('token');
        return res.json({ Status: "Success" })
    },

    user_information: (req, res) => {
        const sql = "SELECT * FROM user_information"
        db.query(sql, (err, result) => {
            if (err) return res.json({ Message: "Error" });
            return res.json(result)
        })
    },

    // user_information: (req, res) => {
    //     const sql = "INSERT INTO user_information (`emp_id`, `persional_email`, `dob`, `personal_contact`, `facebook`, `twitter`, `linkedin`, `instagram`, `github`) VALUES (?)";

    //     const values = [
    //         req.body.emp_id,
    //         req.body.persional_email || null,
    //         req.body.dob || null,
    //         req.body.personal_contact || null,
    //         req.body.facebook || null,
    //         req.body.twitter || null,
    //         req.body.linkedin || null,
    //         req.body.instagram || null,
    //         req.body.github || null
    //     ];

    //     db.query(sql, [values], (err, results) => {
    //         if (!err) {
    //             return res.json({ Status: "Success" });
    //         } else {
    //             return res.json({ Error: "Error inserting data" });
    //         }
    //     });
    // }

    // Both table register and personal information are insert at a time 
    register: (req, res) => {
        const emailValid = "SELECT * FROM user WHERE emp_email = ?";
        const idValid = "SELECT * FROM user WHERE emp_id = ?";
        const sqlUser = "INSERT INTO user (`emp_name`, `emp_id`, `emp_email`, `emp_password`, `reporting_to`, `reporting_to_id`, `designation`, `department`) VALUES (?)";
        const sqlUserInfo = "INSERT INTO user_information (`emp_id`, `persional_email`, `dob`, `personal_contact`, `facebook`, `twitter`, `linkedin`, `instagram`, `github`) VALUES (?)";

        const userValues = [
            req.body.emp_name,
            req.body.emp_id,
            req.body.emp_email,
            req.body.emp_password,
            req.body.reporting_to,
            req.body.reporting_to_id,
            req.body.designation,
            req.body.department
        ];
        const userInfoValues = [
            req.body.emp_id,
            req.body.persional_email || null,
            req.body.dob || null,
            req.body.personal_contact || null,
            req.body.facebook || null,
            req.body.twitter || null,
            req.body.linkedin || null,
            req.body.instagram || null,
            req.body.github || null
        ];

        // Check if email is already registered
        db.query(emailValid, [req.body.emp_email], (err, result) => {
            if (err) {
                console.log(err);
                return res.json({ Error: "Database Error" });
            }
            if (result.length > 0) {
                return res.json({ Error: "Email Already Registered" });
            }

            // Check if emp_id is already registered
            db.query(idValid, [req.body.emp_id], (err, result) => {
                if (err) {
                    console.log(err);
                    return res.json({ Error: "Database Error" });
                }
                if (result.length > 0) {
                    return res.json({ Error: "Employee ID Already Registered" });
                }

                // Begin transaction
                db.beginTransaction(err => {
                    if (err) {
                        console.log(err);
                        return res.json({ Error: "Transaction Error" });
                    }

                    // Insert into user table
                    db.query(sqlUser, [userValues], (err, results) => {
                        if (err) {
                            return db.rollback(() => {
                                console.log(err);
                                res.json({ Error: "Error inserting user data" });
                            });
                        }

                        // Insert into user_information table
                        db.query(sqlUserInfo, [userInfoValues], (err, infoResults) => {
                            if (err) {
                                return db.rollback(() => {
                                    console.log(err);
                                    res.json({ Error: "Error inserting user information" });
                                });
                            }

                            // Commit transaction
                            db.commit(err => {
                                if (err) {
                                    return db.rollback(() => {
                                        console.log(err);
                                        res.json({ Error: "Commit Error" });
                                    });
                                }
                                res.json({ Status: "Success" });
                            });
                        });
                    });
                });
            });
        });
    },

    edit_user_information: (req, res) => {
        const sql = "UPDATE  user_information  SET `persional_email`=? , `dob`=? ,`personal_contact`=? ,`facebook`=? ,`twitter`=? , `linkedin`=? ,  `instagram`=? , `github`=? where emp_id = ?";
        const values = [ 
            req.body.persional_email,
            req.body.dob ,
            req.body.personal_contact ,
            req.body.facebook ,
            req.body.twitter ,
            req.body.linkedin ,
            req.body.instagram ,
            req.body.github 
        ];
        const id = req.params.id;
        db.query(sql, [...values, id], (err, results) => {
            if (!err) {
                return res.json({ Message: "Success" });
            } else {
                return res.json({ Error: "Error inserting data" });
            }
        });
    }




}










module.exports = userController