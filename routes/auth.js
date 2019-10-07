"use strict";

const { Router } = require("express");
const router = Router();

const uploadImageMiddleware = require("./../middleware/upload-image");
const routeGuardMiddleware = require("./../middleware/route-guard");

const signUpControl = require("./../controllers/auth/sign-up");
const loggedInControl = require("./../controllers/auth/logged-in");
const signInControl = require("./../controllers/auth/log-in");
const logOutControl = require("./../controllers/auth/log-out");
const editController = require("./../controllers/auth/edit");
const uploadController = require("./../controllers/auth/upload");

router.post("/signup", signUpControl);

router.get("/loggedin/:userId", loggedInControl);

router.post("/signin", signInControl);

router.post("/logout", routeGuardMiddleware(true), logOutControl);

router.post("/edit", routeGuardMiddleware(true), editController);

router.post(
  "/upload",
  routeGuardMiddleware(true),
  uploadImageMiddleware.single("image"),
  uploadController
);

module.exports = router;
