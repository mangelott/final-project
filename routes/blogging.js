"use strict";

const { Router } = require("express");
const router = Router();
const uploadImageMiddleware = require("./../middleware/upload-image");

const bloggingControl = require("./../controllers/blogging");

router.post(
  "/blog/create",
  uploadImageMiddleware.single("image"),
  bloggingControl.create
);

router.get("/blog", bloggingControl.list);
router.patch(
  "/blog/:id",
  uploadImageMiddleware.single("image"),
  bloggingControl.edit
);
router.delete("/blog/:id", bloggingControl.remove);

module.exports = router;
