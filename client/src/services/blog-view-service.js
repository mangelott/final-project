import axios from "axios";

const blogAPI = axios.create({
  baseURL: "/api"
});

export const createPostServ = data =>
  new Promise((resolve, reject) => {
    const formData = new FormData();
    for (let prop in data) formData.append(prop, data[prop]);
    blogAPI
      .post("/blog/create", formData)
      .then(response => {
        resolve(response.data.data.blogging);
      })
      .catch(error => {
        console.log("SERVICE ERROR", error);
        reject(error);
      });
  });

export const postsServ = () =>
  new Promise((resolve, reject) => {
    blogAPI
      .get("/blog")
      .then(response => {
        resolve(response.data.data.blogging);
      })
      .catch(error => {
        reject(error);
      });
  });

export const loadPostServ = id =>
  new Promise((resolve, reject) => {
    blogAPI
      .get(`/blog/${id}`)
      .then(response => {
        resolve(response.data.data.blogging);
      })
      .catch(error => {
        reject(error);
        console.log("this error>>>>>>>", error);
      });
  });

export const editPostServ = (id, updatedPost) =>
  new Promise((resolve, reject) => {
    blogAPI
      .patch(`/blog/${id}`, updatedPost)
      .then(response => {
        resolve(response.data.data.blogging);
        console.log("response edit", response);
      })
      .catch(error => {
        console.log("ERROR", error);
        reject(error);
      });
  });

export const removePostServ = id =>
  new Promise((resolve, reject) => {
    blogAPI
      .delete(`/blog/${id}`)
      .then(() => {
        resolve();
      })
      .catch(error => {
        reject(error);
        console.log("eeeeeeeerror", error);
      });
  });
