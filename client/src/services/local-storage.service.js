// Import local storage
import localStorageService from './local-storage.service';

// Define the local storage service
const localStorageService = {
    // Get the access token from the local storage
    getAccessToken() {
      return localStorage.getItem('accessToken');
    },
  
    // Set the token in the local storage
    setToken(accessToken) {
      localStorage.setItem('accessToken', accessToken);
    },
  
    // Remove the token from the local storage
    removeToken() {
      localStorage.removeItem('accessToken');
    }
  };
// Export the local storage service
export default localStorageService;

  