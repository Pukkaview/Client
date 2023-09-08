import { useState } from "react";
import Fetcher from "./fetcher";

const fetchComedy = async () => {
    try {
      const fetchResponse = await Fetcher("https://pukkaview.onrender.com/videoplayer/api/search-videos/?genre=Comedy", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (fetchResponse.failure) throw new Error(fetchResponse.message);
      return fetchResponse
    } catch (error) {
      console.error('Error fetching video URL:', error);
    }
  };
  const fetchAction = async () => {
    try {
      const fetchResponse = await Fetcher("https://pukkaview.onrender.com/videoplayer/api/search-videos/?genre=Action", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (fetchResponse.failure) throw new Error(fetchResponse.message);
      return fetchResponse
    } catch (error) {
      console.error('Error fetching video URL:', error);
    }
  };
  const fetchDrama = async () => {
    try {
      const fetchResponse = await Fetcher("https://pukkaview.onrender.com/videoplayer/api/search-videos/?genre=Drama", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (fetchResponse.failure) throw new Error(fetchResponse.message);
      return fetchResponse
    } catch (error) {
      console.error('Error fetching video URL:', error);
    }
  };
  const comedy = await fetchComedy();
  const action = await fetchAction();
  const drama = await fetchDrama();

  export { action, comedy, drama  };