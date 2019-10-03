"use strict";

const multer = require("multer");
const cloudinary = require("cloudinary");
const cloudinaryStorage = require("multer-storage-cloudinary");

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_API_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

const storage = cloudinaryStorage({
  cloudinary,
  folder: "/happy-cure",
  allowedFormats: ["jpg", "png"],

  filename: function (req, res, cb) {
    // The file on cloudinary would have the same name as the original file name
    cb(null, res.originalname);
  }
});

const uploader = multer({ storage });
module.exports = uploader;