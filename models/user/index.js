"use strict";

const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    trim: true
  },
  password: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  role: {
    type: String,
    enum: ["Hospital", "Patient"],
    default: "Patient"
  },
  image: {
    type: String,
    default:
      "https://cdn.pixabay.com/photo/2016/12/13/05/15/puppy-1903313_960_720.jpg"
  },
  about: {
    type: String
  }
});

const signInStatic = require("./statics/sign-in");
const signUpStatic = require("./statics/sign-up");
const findByEmailStatic = require("./statics/find-by-email");

schema.statics.signIn = signInStatic;
schema.statics.signUp = signUpStatic;
schema.statics.findByEmail = findByEmailStatic;

const User = mongoose.model("User", schema);

module.exports = User;
