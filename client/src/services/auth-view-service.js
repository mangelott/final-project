import axios from "axios";

const authAPI = axios.create({
  baseURL: "/api"
});

export const signUpViewServ = ({ username, email, password }) =>
  new Promise((resolve, reject) => {
    authAPI
      .post("/signup", { username, email, password })
      .then(response => {
        resolve(response.data.user);
        console.log("finally!", resolve);
      })
      .catch(error => {
        reject(error);
      });
  });

export const signInViewServ = ({ email, password }) =>
  new Promise((resolve, reject) => {
    authAPI
      .post("/signin", { email, password })
      .then(response => {
        resolve(response.data.user);
      })
      .catch(error => {
        reject(error);
      });
  });

export const loadUserServ = (id, data) =>
  new Promise((resolve, reject) => {
    const formData = new FormData();
    for (let prop in data) formData.append(prop, data[prop]);
    authAPI
      .get("/loggedin")
      .then(response => {
        resolve(response.data.user);
      })
      .catch(error => {
        reject(error);
      });
  });

export const editUserServ = (id, updatedUser) =>
  new Promise((resolve, reject) => {
    authAPI
      .patch(`/edit/${id}`, updatedUser)
      .then(response => {
        resolve(response.data.user);
      })
      .catch(error => {
        reject(error);
      });
  });

export const logOutService = () =>
  new Promise((resolve, reject) => {
    authAPI
      .post("/logout")
      .then(response => {
        console.log("serrvice logout");
        resolve();
      })
      .catch(error => {
        reject(error);
      });
  });

export const verifyServ = () => {
  return new Promise((resolve, reject) => {
    authAPI
      .get("/loggedin/verify")
      .then(response => {
        resolve(response.data.user);
        console.log("VERIFY USER SERVICE RESPONSE", response.data.user);
      })
      .catch(error => {
        reject(error);
      });
  });
};
