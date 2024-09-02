const Router = require('express').Router();
const userControlllers  = require('../controller/user/userController')
// const projectController = require('../controller/project/projectController')
 
Router.post('/api/register',userControlllers.register) 
Router.post('/api/login',userControlllers.login)
Router.get('/api/logout', userControlllers.logout)

// Project information & controller
// Router.get('/api/project', projectController.getprojectinformation) 
// Router.post('/api/project', projectController.createProject)
// Router.put('/api/project/:id', projectController.updateProject)
// Router.delete('/api/project/:id', projectController.deleteProject)
 
  
module.exports = Router   
