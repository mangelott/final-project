"use strict";

module.exports = function (username) {
  const Model = this;
  return Model.findOne({ username })
    .then(user => {
      return Promise.resolve(user);
    })
    .catch(error => {
      return Promise.reject(error);
    });
};