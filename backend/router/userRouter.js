const Router = require('express').Router();
const userControlllers  = require('../controller/user/userController')
const userVerifyer = require("../controller/user/userVerify")

// const profileController = require('../controller/user/profileController')

// Router.post('/upload',profileController.upload) 

Router.post('/api/register',userControlllers.register) 
Router.post('/api/login',userControlllers.login)
// Router.get('/api',userControlllers.userverify)
// Router.get('/api/logout',userControlllers.logout)
Router.get('/api/logout', userControlllers.logout)
// Router.get('/api', userVerifyer, userControlllers.userverify)

  
module.exports = Router   
