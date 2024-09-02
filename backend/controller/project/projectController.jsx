
const express = require("express")
const mysql = require("mysql")
const jwt = require("jsonwebtoken")
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


const projectController = {
    getprojectinformation: (req, res) => {
        const sql = "SELECT * FROM project_information"
        db.query(sql, (err, result) => {
            if (err) return res.json({ Message: "Error" });
            return res.json(result)
        })
    },
    //  addprojectinformation: (req, res) => {
    //     const sql = "INSERT INTO project_information (user_name, user_id, project_name, project_information, business_type, website_link, upcoming_release, current_release, closed_release, assignee, dev, dev_admin, teesting_server, v7_admin, staging, staging_admin, production, production_admin) VALUES (?)"
    //     const values = [
    //         req.body.user_name,
    //         req.body.user_id,
    //         req.body.project_name,
    //         req.body.project_information,
    //         req.body.business_type,
    //         req.body.website_link,
    //         req.body.upcoming_release,
    //         req.body.current_release,
    //         req.body.closed_release,
    //         req.body.assignee,
    //         req.body.dev,
    //         req.body.dev_admin,
    //         req.body.teesting_server,
    //         req.body.v7_admin,
    //         req.body.staging,
    //         req.body.staging_admin,
    //         req.body.production,
    //         req.body.production_admin
    //     ];
    //     db.query(sql, [values], (err, results) => {
    //         if (!err) {
    //             return res.json(results)
    //         } else {
    //             console.log(err);
    //         }
    //     })    
    // },

    // editprojectinformation: (req, res) => {
    //     // const sql = "update project_information set `name`=?,`contact`=?,`email`=?,`destination`=?,`other`=?  where ID = ?";
    //     const sql = "INSERT INTO project_information (`user_name`=?, `user_id`=?, `project_name`=?, `project_information`=?, `business_type`=?, `website_link`=?, `upcoming_release`=?, `current_release`=?, `closed_release`=?, `assignee`=?, `dev`=?, `dev_admin`=?, `teesting_server`=?, `v7_admin`=?, `staging`=?, `staging_admin`=?, `production`=?, `production_admin`=?) where ID = ?";
    //     const values = [
    //         req.body.user_name,
    //         req.body.user_id,
    //         req.body.project_name,
    //         req.body.project_information,
    //         req.body.business_type,
    //         req.body.website_link,
    //         req.body.upcoming_release,
    //         req.body.current_release,
    //         req.body.closed_release,
    //         req.body.assignee,
    //         req.body.dev,
    //         req.body.dev_admin,
    //         req.body.teesting_server,
    //         req.body.v7_admin,
    //         req.body.staging,
    //         req.body.staging_admin,
    //         req.body.production,
    //         req.body.production_admin
    //     ];
    //     const id = req.params.id;

    //     db.query(sql, [...values, id], (err, results) => {
    //         if (!err) {
    //             return res.json(results)
    //         } else {
    //             console.log(err);
    //         }
    //     })
    // },

    // deleteprojectinformation: (req, res) => {
    //     const sql = "DELETE FROM project_information WHERE ID = ?";
    //     const id = req.params.id;
    //     db.query(sql, id, (err, results) => {
    //         if (!err) {
    //             return res.json(results)
    //         } else {
    //             console.log(err);
    //         }
    //     })
    // }









}

module.exports = projectController