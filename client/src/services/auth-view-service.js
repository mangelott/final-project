import axios from "axios";

const authAPI = axios.create({
  baseURL: "/"
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
        console.log(">>>>", error);
        reject(error);
      });
  });

export const signInViewServ = ({ email, password }) =>
  new Promise((resolve, reject) => {
    authAPI
      .post("/signin", { email, password })
      .then(response => {
        console.log(response);
        resolve(response.data.user);
      })
      .catch(error => {
        console.log("uv got an error trying to login", error);
        reject(error);
      });
  });

export const loggedInViewServ = () =>
  new Promise((resolve, reject) => {
    authAPI
      .get("/loggedin")
      .then(response => {
        const user = response.data.user;
        resolve(user);
      })
      .catch(error => {
        reject(error);
      });
  });
