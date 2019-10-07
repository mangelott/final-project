import axios from "axios";

const recipeAPI = axios.create({
  baseURL: "/"
});

export const newRecipe = data => {
  return new Promise((resolve, reject) => {
    const formData = new FormData();
    for (let prop in data) formData.append(prop, data[prop]);
    recipeAPI
      .post("/recipe/create", formData)
      .then(response => {
        // console.log("RESPONSE", response.data.data.recipe)
        resolve(response.data.recipe);
      })
      .catch(error => {
        reject(error);
      });
  });
};

export const load = id => {
  return new Promise((resolve, reject) => {
    recipeAPI
      .get(`/recipe/${id}`)
      .then(response => {
        resolve(response.data.data.recipe);
      })
      .catch(error => {
        reject(error);
      });
  });
};

export const listRecipes = () =>
  new Promise((resolve, reject) => {
    recipeAPI
      .get("/recipe")
      .then(response => {
        resolve(response.data.data.recipes);
        console.log("resolve", resolve);
      })
      .catch(error => {
        reject(error);
      });
  });

export const edit = (id, updatedRecipe) => {
  return new Promise((resolve, reject) => {
    recipeAPI
      .patch(`/recipe/${id}`, updatedRecipe)
      .then(response => {
        resolve(response.data.data.post);
      })
      .catch(error => {
        reject(error);
      });
  });
};

export const remove = id => {
  return new Promise((resolve, reject) => {
    recipeAPI
      .delete(`/recipe/${id}`)
      .then(() => {
        resolve();
      })
      .catch(error => {
        reject(error);
      });
  });
};
