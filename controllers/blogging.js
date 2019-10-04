"use strict";

const Blogging = require("./../models/blog");

exports.create = (req, res, next) => {
  const { title, subtitle, text } = req.body;

  const image = req.file.secure_url;

  console.log(req.file.secure_url);
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
  console.log(id);

  const { title, subtitle, text } = req.body;
  const image = req.file.secure_url;
  console.log(image);

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
