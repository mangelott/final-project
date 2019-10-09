"use strict";
const User = require("./../../models/user");

module.exports = (req, res, next) => {
  const id = req.session.user._id;
  console.log("id>>>", req.session.user);

  User.findById(id)
    .then(user => {
      console.log("user>>>", user);
      res.json({ user: user });
    })
    .catch(error => {
      next(error);
      console.log("loading user error", error);
    });
};
