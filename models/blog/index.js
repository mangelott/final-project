const mongoose = require("mongoose");

const bloggingSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  subtitle: {
    type: String
  },
  image: {
    type: String,
    required: true
  },
  text: {
    type: String,
    require: true
  }
});

const Blogging = mongoose.model("Blogging", bloggingSchema);

module.exports = Blogging;
