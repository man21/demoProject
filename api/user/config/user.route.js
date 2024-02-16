


const Router = require("express").Router()


const  userController =  require("../controller/user.controller")



Router.get("/signup", userController.signup)


module.exports = Router