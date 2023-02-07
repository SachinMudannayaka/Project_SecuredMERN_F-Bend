const express=require('express');
const { signup, login, verfiedToken, getUser,refreshToken, logout } = require('../controllers/user-controller');
const router=express.Router();


router.post("/signup",signup);
router.post('/login',login);
router.get('/user',verfiedToken,getUser);
router.get('/refresh',refreshToken,verfiedToken,getUser);
router.post('/logout',verfiedToken,logout);
module.exports=router;