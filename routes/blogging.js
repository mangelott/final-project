"use strict";

const { Router } = require("express");
const router = Router();
const uploadImageMiddleware = require("./../middleware/upload-image");

const bloggingControl = require("./../controllers/blogging");

router.post("/blog/create", bloggingControl.create);
router.get("/blog", bloggingControl.list);
router.patch("/blog/:id", bloggingControl.edit);
router.delete("/blog/:id", bloggingControl.remove);
router.patch("/recipe/:id",
  uploadImageMiddleware.single("image"),
  bloggingControl.uploadImage);

module.exports = router;