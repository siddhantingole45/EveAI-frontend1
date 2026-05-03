import axios from 'axios';

// Create a configured instance of axios
const apiClient = axios.create({
  baseURL: 'http://localhost:8000', // Your FastAPI backend URL
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request Interceptor: Inject the JWT token automatically
apiClient.interceptors.request.use(
  (config) => {
    // Check if we have a token stored in local storage
    const token = localStorage.getItem('access_token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response Interceptor: Handle 401 Unauthorized globally
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      // The token is invalid or expired. Clear it and force a login.
      localStorage.removeItem('access_token');
      
      // Only redirect if we aren't already on the login page to prevent looping
      if (window.location.pathname !== '/login') {
        window.location.href = '/login';
      }
    }
    return Promise.reject(error);
  }
);

export default apiClient;