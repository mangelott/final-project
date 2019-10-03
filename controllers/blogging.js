"use strict";

const Blogging = require("./../models/blog");

exports.create = (req, res, next) => {
  const { title, subtitle, image, text } = req.body;

  Blogging.create({
    title,
    subtitle,
    image,
    text
  })
    .then(blogging => {
      res.json({ type: "awesome!", data: { blogging } });
    })
    .catch(error => {
      next(error);
    });
};

exports.list = (req, res, next) => {
  Blogging.find()
    .sort({ createdAt: -1 })
    .then(blogging => {
      res.json({ type: "awesome!", data: { blogging } });
    })
    .catch(error => {
      next(error);
    });
};

exports.edit = (req, res, next) => {
  const id = req.params.id;
  const { title, subtitle, image, text } = req.body;
  Blogging.findByIdAndUpdate(
    { _id: id },
    {
      ...(title && { title }),
      ...(subtitle && { subtitle }),
      ...(image && { image }),
      ...(text && { text })
    },
    { new: true }
  )
    .then(blogging => {
      if (blogging) {
        res.json({ type: "awesome", data: { blogging } });
      } else {
        next(new Error("POST_COULD_NOT_BE_EDITED"));
      }
    })
    .catch(error => {
      next(error);
    });
};

exports.remove = (req, res, next) => {
  const id = req.params.id;
  Blogging.findByIdAndDelete(id)
    .then(blogging => {
      if (blogging) {
        res.json({ type: "success" });
      } else {
        next(new Error("YOUR_POST_COULD_NOT_BE_DELETED"));
      }
    })
    .catch(error => {
      next(error);
    });
};

exports.uploadImage = (req, res, next) => {
  const { url } = req.file;
  Blogging.findByIdAndUpdate(
    req.blog._id,
    {
      ...(url && { image: url })
    },
    { new: true }
  )
    .then(blog => {
      if (!blog) {
        next(new Error("BLOG_NOT_FOUND"));
        return;
      }
      res.json({ blog });
    })
    .catch(error => {
      next(error);
    });
};