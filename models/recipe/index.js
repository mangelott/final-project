const mongoose = require("mongoose");

const recipeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true
  },
  dishType: {
    type: String,
    enum: ["Breakfast", "Dish", "Snack", "Drink", "Dessert", "Other"]
  },
  ingredients: String,
  directions: String,
  duration: {
    type: Number,
    min: 0
  },
  calories: Number,
  image: {
    type: String
    // required: true
  }
}
);

const Recipe = mongoose.model("Recipe", recipeSchema);

module.exports = Recipe;
