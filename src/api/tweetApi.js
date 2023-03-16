// src/api/tweetApi.js
import axiosInstance from './axiosInstance';

export const getTweets = async () => {
  try {
    console.log("get api")
    const response = await axiosInstance.get('/tweets');
    console.log("res",response)
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const createTweet = async (tweetData, token) => {
  try {
    const response = await axiosInstance.post('/tweets', tweetData, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const deleteTweet = async (tweetId) => {
  try {
    const response = await axiosInstance.delete(`/tweets/${tweetId}`);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const updateTweet = async (tweetId, updatedTweet) => {
  try {
    const response = await axiosInstance.put(`/tweets/${tweetId}`, updatedTweet);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};