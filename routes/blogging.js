"use strict";

const { Router } = require("express");
const router = Router();
const uploadImageMiddleware = require("./../middleware/upload-image");

const bloggingControllers = require("./../controllers/blogging");

router.post("/blog/create", bloggingControllers.create);
router.get("/blog", bloggingControllers.list);
router.patch("/blog/:id", bloggingControllers.edit);
router.delete("/blog/:id", bloggingControllers.remove);
router.patch("/recipe/:id",
  uploadImageMiddleware.single("image"),
  bloggingControllers.uploadImage);

module.exports = router;