import axios from "axios";

const api = axios.create({
  baseURL: "http://10.155.225.134:5000/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;