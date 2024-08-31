const express = require('express');
const { userregister, userLogin } = require('../controller/userController');






const userRouter = express.Router();

userRouter.post('/register',userregister)
userRouter.post('/login',userLogin)



module.exports = userRouter;