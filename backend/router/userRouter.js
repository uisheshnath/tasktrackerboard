const Router = require('express').Router();
const userControlllers  = require('../controller/user/userController')

// const profileController = require('../controller/user/profileController')

// Router.post('/upload',profileController.upload) 

Router.post('/register',userControlllers.register) 
Router.post('/login',userControlllers.login)
Router.get('/',userControlllers.userverify)
Router.get('/logout',userControlllers.logout)
 
module.exports = Router   
