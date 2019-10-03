import axios from "axios";

const recipeAPI = axios.create({
  baseURL: "/"
});

export const recipeViewServ = ({ title, picture, dishType, ingredients, direction, duration, calories, image }) =>
  new Promise((resolve, reject) => {
    recipeAPI
      .post("/recipe/create", { title, picture, dishType, ingredients, direction, duration, calories, image })
      .then(response => {
        resolve(response.data.recipe);
        console.log("finally!", resolve);
      })
      .catch(error => {
        console.log(">>>>", error);
        reject(error);
      });
  });