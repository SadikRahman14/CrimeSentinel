import axios from 'axios';

// Define the base API URL
const API_BASE_URL = 'http://localhost:5000/api'; // Change this to match your backend

// Function to sign up a new user
export const signup = async (userData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/signup`, userData);
    return response.data;
  } catch (error) {
    console.error('Signup Error:', error.response?.data || error.message);
    throw error;
  }
};

// Function to log in a user
export const login = async (userData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/login`, userData);
    return response.data;
  } catch (error) {
    console.error('Login Error:', error.response?.data || error.message);
    throw error;
  }
};

// Function to get user data (protected route)
export const getUserData = async (token) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/user`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    console.error('User Data Fetch Error:', error.response?.data || error.message);
    throw error;
  }
};
