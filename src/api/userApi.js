// src/api/userApi.js
import axiosInstance from './axiosInstance';

export const registerUser = async (userData) => {
  try {
    const response = await axiosInstance.post('/users/register', userData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

// ログインAPI関数
export const loginUser = async (userData) => {
  try {
    const response = await axiosInstance.post('/users/login', userData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export async function updateProfile(userId, profileData) {
  try {
    const response = await axiosInstance.put(`/api/users/${userId}`, profileData);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
