import axios from "axios";
const api = axios.create({
    baseURL: "http://localhost:5000", // your backend API URL
    headers: {
      "Content-Type": "application/json", // specify the content type
    },
  });
  export default api;
  