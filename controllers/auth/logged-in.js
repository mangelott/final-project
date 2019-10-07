"use strict";
const User = require("./../../models/user");

module.exports = (req, res, next) => {
  const id = req.params.userId;
  console.log("id>>>", id);

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
