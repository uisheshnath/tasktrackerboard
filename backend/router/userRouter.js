const Router = require('express').Router();
const userControlllers  = require('../controller/user/userController')
 
Router.post('/api/register',userControlllers.register) 
Router.post('/api/login',userControlllers.login)
Router.get('/api/logout', userControlllers.logout)
 
  
module.exports = Router   
