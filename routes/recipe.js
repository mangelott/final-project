"use strict";

const { Router } = require('express');
const router = Router();

const recipeControllers = require("./../controllers/recipe");

router.post("/recipe/create", recipeControllers.create);

router.get("/recipe", recipeControllers.list);
router.get("/recipe/:id", recipeControllers.load);


router.patch("/recipe/:id", recipeControllers.edit);

router.delete("/recipe/:id", recipeControllers.remove);

module.exports = router;