"use strict";

const User = require("../../models/user");

module.exports = (req, res, next) => {
  const id = req.params.id;
  const { username, email, about } = req.body;
  let image;
  if (req.file) {
    image = req.file.secure_url;
  }

  User.findOneAndUpdate(
    {
      _id: id
    },
    {
      ...(username && { username }),
      ...(email && { email })
    },
    { new: true }
  )

    .then(user => {
      if (user) {
        console.log("Edited", user);
        res.json({ user });
      } else {
        next(new Error("USER_COULD_NOT_BE_EDITED"));
      }
    })
    .catch(error => {
      console.log("Error:", error);
      next(error);
    });
};
