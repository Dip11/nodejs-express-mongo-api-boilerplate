const express = require("express");
const router = express.Router();
var AppUserController = require('../../controllers/user/app-user.controller');
const auth = require('../auth');


router.post('/register', auth.optional, AppUserController.registerUser);

router.post("/login",auth.optional,  AppUserController.loginUser);

router.get("/private-route", auth.required, AppUserController.private);

router.get("/public-route", auth.optional, AppUserController.public);


module.exports = router;
