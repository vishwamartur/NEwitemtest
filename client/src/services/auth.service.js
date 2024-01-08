// Import axios and local storage
import axios from 'axios';
import localStorageService from './local-storage.service';

// Create an axios instance
const http = axios.create({
  baseURL: 'http://localhost:5000/api' // your api url
});

// Add a request interceptor
http.interceptors.request.use(
  (config) => {
    // Get the access token from the local storage
    const token = localStorageService.getAccessToken();
    // If the token exists, set it in the header
    if (token) {
      config.headers['Authorization'] = 'Bearer ' + token;
    }
    return config;
  },
  (error) => {
    // Handle the error
    return Promise.reject(error);
  }
);

// Add a response interceptor
http.interceptors.response.use(
  (response) => {
    // Return the response
    return response;
  },
  (error) => {
    // Get the error status
    const status = error.response ? error.response.status : null;
    // If the status is 401, the token is expired or invalid
    if (status === 401) {
      // Remove the token from the local storage
      localStorageService.removeToken();
      // Redirect to the login page
      window.location.href = '/login';
    }
    // Handle the error
    return Promise.reject(error);
  }
);

// Define the auth service
const authService = {
  // Sign up method
  async signup(user) {
    try {
      // Send a post request to the signup endpoint
      const response = await http.post('/users/signup', user);
      // Return the response data
      return response.data;
    } catch (error) {
      // Throw the error
      throw error;
    }
  },

  // Log in method
  async login(user) {
    try {
      // Send a post request to the login endpoint
      const response = await http.post('/users/login', user);
      // Get the access token and the user data from the response
      const { accessToken, user: userData } = response.data;
      // Set the token in the local storage
      localStorageService.setToken(accessToken);
      // Return the user data
      return userData;
    } catch (error) {
      // Throw the error
      throw error;
    }
  },

  // Log out method
  logout() {
    // Remove the token from the local storage
    localStorageService.removeToken();
    // Redirect to the login page
    window.location.href = '/login';
  },

  // Get current user method
  async getCurrentUser() {
    try {
      // Send a get request to the profile endpoint
      const response = await http.get('/users/profile');
      // Return the user data
      return response.data;
    } catch (error) {
      // Throw the error
      throw error;
    }
  }
};

// Export the auth service
export default authService;
