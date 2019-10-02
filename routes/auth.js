"use strict";

const { Router } = require("express");
const router = Router();

const signUpControl = require("./../controllers/auth/sign-up");
const loggedInControl = require("./../controllers/auth/logged-in");
const signInControl = require("./../controllers/auth/log-in");
const logOutControl = require("./../controllers/auth/log-out");

router.post("/signup", signUpControl);
router.get("/loggedin", loggedInControl);
router.post("/signin", signInControl);
router.post("/logout", logOutControl);

module.exports = router;
