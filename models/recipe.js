const mongoose = require("mongoose");

const recipeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true
  },
  body: {
    picture: {
      type: String,
      default: "https://images.media-allrecipes.com/images/75131.jpg"
    },
    dishType: {
      type: String,
      enum: ["Breakfast", "Dish", "Snack", "Drink", "Dessert", "Other"]
    },
    ingredient: Array,
    direction: { type: [String] },
    duration: {
      type: Number,
      min: 0
    },
    calorie: Number
  }
});

const Recipe = mongoose.model("Recipe", recipeSchema);
module.exports = Recipe;
