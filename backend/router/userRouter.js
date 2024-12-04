const Router = require('express').Router();
const userControlllers  = require('../controller/user/userController')
const projectController = require('../controller/project/projectController')
const taskController = require('../controller/task/taskController')
 
Router.post('/api/register',userControlllers.register) 
Router.post('/api/login',userControlllers.login)
Router.get('/api/logout', userControlllers.logout)
Router.get('/api/myuser', userControlllers.login_user)

// User personal information details
Router.get('/api/user_information', userControlllers.user_information)
Router.patch('/api/edit_user_information/:id', userControlllers.edit_user_information)


// Project information & controller 
Router.get('/api/project', projectController.getprojectinformation)
Router.post('/api/addproject', projectController.addprojectinformation)
Router.put('/api/editproject/:id',projectController.editprojectinformation)
Router.delete('/api/deleteproject/:emp_id',projectController.deleteprojectinformation)

// task information & controller 
Router.get('/api/task', taskController.gettaskinformation)
Router.post('/api/addtask', taskController.addtaskinformation)
Router.patch('/api/edittask/:id',taskController.edittaskinformation)
Router.delete('/api/deletetask/:id',taskController.deletetaskinformation)
Router.patch('/api/myupdate/:id',taskController.myupdate )


  
module.exports = Router   
