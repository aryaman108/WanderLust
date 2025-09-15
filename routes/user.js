const express = require("express");
const router = express.Router();
const User = require("../models/user.js");
const wrapAsync = require("../utils/wrapAsync.js");
const passport = require("passport");
const { saveRedirectUrl } = require("../middleware.js");


const userController = require("../controller/user.js");

// Render registration form
router.get("/signup", userController.renderRegisterForm);

// Handle registration form submission
router.post("/signup", wrapAsync(userController.signup));

router.get("/login", userController.renderLoginForm);

router.post("/login",saveRedirectUrl, passport.authenticate("local",{
    failureFlash:true,
    failureRedirect:"/login"
}),userController.login);

router.get("/logout",userController.logout);

module.exports = router;