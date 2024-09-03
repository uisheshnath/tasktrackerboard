const Router = require('express').Router();
const userControlllers  = require('../controller/user/userController')
const projectController = require('../controller/project/projectController')
 
Router.post('/api/register',userControlllers.register) 
Router.post('/api/login',userControlllers.login)
Router.get('/api/logout', userControlllers.logout)

// Project information & controller 
Router.get('/api/project', projectController.getprojectinformation)
Router.post('/api/addproject', projectController.addprojectinformation)
Router.put('/api/editproject/:id',projectController.editprojectinformation)
Router.delete('/api/deleteproject/:id',projectController.deleteprojectinformation)


  
module.exports = Router   
