"use strict";

module.exports = (req, res, next) => {
  req.session.destroy();
  res.json({ message: "User logged out" });
};
