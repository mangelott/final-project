"use strict";

const { Router } = require('express');
const router = Router();

const recipeControllers = require("./../controllers/recipe");
const uploadImageMiddleware = require("./../middleware/upload-image");

router.post("/create",
  uploadImageMiddleware.single("image"),
  recipeControllers.create);

router.patch("/recipe/:id",
  uploadImageMiddleware.single("image"),
  recipeControllers.uploadImage);

router.get("/recipe", recipeControllers.list);

router.get("/recipe/:id", recipeControllers.load);
router.patch("/recipe/:id", recipeControllers.edit);
router.delete("/recipe/:id", recipeControllers.remove);


module.exports = router;