import axios from "axios";

const api = axios.create({
  baseURL: "https://goobarapi-2.onrender.com/",
});

export default api;
