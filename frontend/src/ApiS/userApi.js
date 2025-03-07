import apiInstance from "../Network/apiInterceptor";

// Login & Register - Direct API Calls (No Interceptor)
import axios from "axios";
const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const registerUser = async (userData) => {
  try {
    return await axios.post(`${API_URL}/user/register`, userData);
  } catch (err) {
    throw err.response;
  }
};

export const loginUser = async (userData) => {
  try {
    return await axios.post(`${API_URL}/user/login`, userData);
  } catch (err) {
    throw err.response;
  }
};
