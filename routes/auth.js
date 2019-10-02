"use strict";

const { Router } = require("express");
const router = Router();

const signUpControl = require("./../controllers/auth/sign-up");
const loggedInControl = require("./../controllers/auth/logged-in");
const signInControl = require("./../controllers/auth/log-in");

router.post("/signup", signUpControl);
router.get("/loggedin", loggedInControl);
router.post("/signin", signInControl);
module.exports = router;
