const mongoose = require("mongoose");

const recipeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true
  },
  dishType: {
    type: String,
    enum: ["Breakfast", "Dish", "Snack", "Drink", "Dessert", "Other"],
    required: true
  },
  ingredients: {
    type: String,
    required: true
  },
  directions: {
    type: String,
    required: true
  },
  duration: {
    type: Number,
    min: 0,
    required: true
  },
  calories: Number,
  image: {
    type: String,
    required: true
  }
}
);

const Recipe = mongoose.model("Recipe", recipeSchema);

module.exports = Recipe;
