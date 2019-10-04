import axios from "axios";

const recipeAPI = axios.create({
  baseURL: "/"
});

// export const newRecipe = ({ title, dishType, ingredients, directions, duration, calories, image }) =>
//   new Promise((resolve, reject) => {
//     console.log("testing params", title, dishType, ingredients, directions, duration, calories, image)
//     recipeAPI
//       .post("/recipe/create", { title, dishType, ingredients, directions, duration, calories, image })
//       .then(response => {
//         resolve(response.data.recipe);
//         console.log("finally!", response);
//       })
//       .catch(error => {
//         console.log("ERROR>>>>", error);
//         reject(error);
//       });
//   });

export const newRecipe = data => {
  return new Promise((resolve, reject) => {
    const formData = new FormData();
    for (let prop in data) formData.append(prop, data[prop]);
    recipeAPI
      .post("/recipe/create", formData)
      .then(response => {
        console.log("RESPONSE", response.data.data.recipe)
        resolve(response.data.recipe);
      })
      .catch(error => {
        reject(error);
      });
  });
};



// export const uploadService = data =>
//   new Promise((resolve, reject) => {
//     recipeAPI
//       .post("/upload", data)
//       .then(response => {
//         const recipe = response.data.recipe;
//         resolve(recipe);
//       })
//       .catch(error => {
//         console.log(error);
//         reject(error);
//       });
//   });