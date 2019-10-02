"use strict";

const bcrypt = require("bcryptjs");
const commonPasswordList = require("fxa-common-password-list");

const verifyPasswordStrength = password => {
  if (commonPasswordList.test(password)) {
    return false;
  } else if (password.length < 8) {
    return false;
  } else {
    return true;
  }
};

module.exports = function({ username, password, email }) {
  const Model = this;

  return Model.findByUsername(username)
    .then(user => {
      if (user) {
        throw new Error("USER_ALREADY_EXISTS");
      } else if (!verifyPasswordStrength(password)) {
        throw new Error("PASSWORD_IS_NOT_STRONG");
      } else {
        return bcrypt.hash(password, 10);
      }
    })
    .then(hash => {
      return Model.create({
        username,
        password: hash,
        email
      });
    })
    .then(user => {
      return Promise.resolve(user);
    })
    .catch(error => {
      console.log(error);
      return Promise.reject(
        new Error("There was an error in the sign up process.")
      );
    });
};
