import axios from "axios";
const instance = axios.create({
  baseURL:
    process.env.REACT_APP_HEROKU_BACKEND_URL ||
    "http://localhost:3000" ||
    "http://localhost:3001",
});
instance.defaults.headers.post["Content-Type"] = "application/json";
instance.defaults.withCredentials = true;

export default instance;
