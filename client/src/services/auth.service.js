import axios from "axios";
import localStorageService from "./local-storage.service";

const http = axios.create({
  baseURL: "http://localhost:3000/api",
});

http.interceptors.request.use(
  (config) => {
    const token = localStorageService.getAccessToken();
    if (token) {
      config.headers["Authorization"] = "Bearer " + token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

http.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const status = error.response ? error.response.status : null;
    if (status === 401) {
      localStorageService.removeToken();
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

const authService = {
  async signup(user) {
    try {
      const response = await http.post("/users/signup", user);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  async login(user) {
    try {
      const response = await http.post("/users/login", user);
      const { accessToken, user: userData } = response.data;
      localStorageService.setToken(accessToken);
      return userData;
    } catch (error) {
      throw error;
    }
  },

  logout() {
    localStorageService.removeToken();
    window.location.href = "/login";
  },

  async getCurrentUser() {
    try {
      const response = await http.get("/users/profile");
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};

export default authService;
