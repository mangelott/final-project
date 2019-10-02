"use strict";

const User = require("./../../models/user");

module.exports = (req, res, next) => {
  const { username, password, email } = req.body;
  User.signUp({ username, password, email })
    .then(user => {
      req.session.user = {
        _id: user._id
      };
      res.json({ user });
    })
    .catch(error => {
      next(error);
    });
};
