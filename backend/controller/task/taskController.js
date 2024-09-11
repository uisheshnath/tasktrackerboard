
const express = require("express")
const mysql = require("mysql")
const cookieParser = require("cookie-parser")
require('dotenv').config();
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



const taskController = {
    gettaskinformation: (req, res) => {
        const sql = "SELECT * FROM task_information"
        db.query(sql, (err, result) => {
            if (err) return res.json({ Message: "Error" });
            return res.json(result)
        })
    },
    addtaskinformation: (req, res) => {
        const sql = "INSERT INTO task_information (emp_name, emp_id, reporting_to, reporting_to_id,project_name,project_title ,description,priority,start_date, end_date, status) VALUES (?)"
        const values = [
            req.body.emp_name,
            req.body.emp_id,
            req.body.reporting_to,
            req.body.reporting_to_id,
            req.body.project_name,
            req.body.project_title,
            req.body.description,
            req.body.priority,
            req.body.start_date,
            req.body.end_date,
            req.body.status,
        ];
        db.query(sql, [values], (err, results) => {
            if (!err) {
                return res.json({ Message: "Success" })
            } else {
                res.json({ Error: "Something Wrong!" });
            }
        })
    },
    edittaskinformation: (req, res) => {
        const sql = "update task_information set `emp_name`=?, `emp_id`=?, `reporting_to`=?, `reporting_to_id`=?, `project_name`=?, `project_title`=?,`description`=?,`priority`=?, `start_date`=?, `end_date`=?, `status`=?  where ID = ?";
        const values = [
            req.body.emp_name,
            req.body.emp_id,
            req.body.reporting_to,
            req.body.reporting_to_id,
            req.body.project_name,
            req.body.project_title,
            req.body.description,
            req.body.priority,
            req.body.start_date,
            req.body.end_date,
            req.body.status,
        ];
        const id = req.params.id;

        db.query(sql, [...values, id], (err, results) => {
            if (!err) {
                return res.json({ Message: "Success" })
            } else {
                res.json({ Error: "Something Wrong!" });
            }
        })
    },
    deletetaskinformation: (req, res) => {
        const sql = "DELETE FROM task_information WHERE ID = ?";
        const id = req.params.id;
        db.query(sql, id, (err, results) => {
            if (!err) {
                return res.json({ Message: "Success" })
            } else {
                res.json({ Error: "Something Wrong!" });
            }
        })
    },
    myupdate: (req, res) => {
        const sql = "UPDATE task_information SET status = ? WHERE ID = ?";
        const values = [
            req.body.status, // New status value 
        ];
        const id = req.params.id;
        db.query(sql, [...values, id], (err, results) => {
            if (!err) {
                if (results.affectedRows > 0) {
                    return res.json({ Message: "Success" });
                } else {
                    return res.json({ Error: "Task not found or no changes made" });
                }
            } else {
                return res.json({ Error: "Something went wrong!" });
            }
        });
    }

}

module.exports = taskController