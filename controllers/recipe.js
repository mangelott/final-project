"use strict";

const Recipe = require("./../models/recipe");

exports.list = (req, res, next) => {
  Recipe.find()
    .sort({ createdAt: -1 })
    .populate("user")
    .then(recipes => {
      res.json({ type: "success", data: { recipes } });
    })
    .catch(error => {
      console.log(error);
      next(error);
    });
};

exports.create = (req, res, next) => {
  const {
    title,
    picture,
    dishtype,
    ingredient,
    direction,
    calorie,
    duration } = req.body;

  Recipe.create({
    title,
    picture,
    dishtype,
    ingredient,
    direction,
    calorie,
    duration
  })
    .then(recipe => {
      res.json({ type: "success", data: { recipe } });
    })
    .catch(error => {
      console.log(error);
      next(error);
    });
};

exports.load = (req, res, next) => {
  const id = req.params.id;
  Recipe.findById(id)
    .populate("user")
    .then(post => {
      res.json({ type: "success", data: { post } });
    })
    .catch(error => {
      console.log(error);
      next(error);
    });
};

exports.edit = (req, res, next) => {
  const id = req.params.id;
  const {
    title,
    body
    // picture,
    // dishtype,
    // ingredient,
    // direction,
    // calorie,
    // duration
  } = req.body;
  Recipe.findOneAndUpdate(
    {
      _id: id
    },
    {
      ...(title && { title }),
      ...(body && { body })
    },
    { new: true }
    // ...(picture && {picture}),
    // ...(dishtype && {dishtype}),
    // ...(ingredient && {ingredient}),
    // ...(direction && {direction}),
    // ...(ingredient && {ingredient}),
  )
    .then(recipe => {
      if (recipe) {
        res.json({ type: "success", data: { recipe } });
      } else {
        next(new Error("RECIPE_COULD_NOT_BE_EDITED"));
      }
    })
    .catch(error => {
      next(error);
    });
};