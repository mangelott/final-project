"use strict";

const Recipe = require("./../models/recipe");

exports.list = (req, res, next) => {
  Recipe.find()
    .then(recipes => {
      res.json({ type: "success", data: { recipes } });
    })
    .catch(error => {
      console.log("erro list contr", error);
      next(error);
    });
};

exports.uploadImage = (req, res, next) => {
  const { url } = req.file;
  Recipe.findByIdAndUpdate(
    req.recipe._id,
    {
      ...(url && { image: url })
    },
    { new: true }
  )
    .then(recipe => {
      if (!recipe) {
        next(new Error("RECIPE_NOT_FOUND"));
        return;
      }
      res.json({ recipe });
    })
    .catch(error => {
      next(error);
    });
};

exports.create = (req, res, next) => {
  const {
    title,
    dishType,
    ingredients,
    directions,
    calories,
    duration } = req.body;

  const image = req.file.secure_url;


  Recipe.create({
    title,
    dishType,
    ingredients,
    directions,
    duration,
    calories,
    image
  })
    .then(recipe => {
      res.json({ type: "success", data: { recipe } });
    })
    .catch(error => {
      console.log("aqui ha erro", error);
      next(error);
    });
};

exports.load = (req, res, next) => {
  const id = req.params.id;
  Recipe.findById(id)
    // .populate("user")
    .then(recipe => {
      res.json({ type: "success", data: { recipe } });
    })
    .catch(error => {
      console.log(error);
      next(error);
    });
};

exports.edit = (req, res, next) => {
  const id = req.params.id;
  const { title, dishtype, ingredients, directions, calories, duration } = req.body;
  let image;
  if (req.file) {
    image.req.file.secure_url;
  }

  Recipe.findByIdAndUpdate(
    {
      _id: id
    },
    {
      ...(title && { title }),
      ...(dishtype && { dishtype }),
      ...(ingredients && { ingredients }),
      ...(directions && { directions }),
      ...(calories && { calories }),
      ...(duration && { duration })
    },
    { new: true })

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


exports.remove = (req, res, next) => {
  const id = req.params.id;
  Recipe.findByIdAndDelete(id)
    .then(recipe => {
      if (recipe) {
        res.json({ type: "success" });
      } else {
        next(new Error("RECIPE_COULD_NOT_BE_DELETED"));
      }
    })
    .catch(error => {
      next(error);
    });
};