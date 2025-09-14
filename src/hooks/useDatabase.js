import React, { useState } from "react";
import { axiosInstance } from "../utils";

export const useDatabase = () => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);

  const postData = async (url, data) => {
    try {
      setIsPending(true);
      const req = await axiosInstance.post(url, data);
      setData(req.data);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsPending(false);
    }
  };
  const deletePost = async (url) => {
    try {
      setIsPending(true);
      const req = await axiosInstance.delete(url);
      setData(req.data);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsPending(false);
    }
  };
  const getData = async (url) => {
    try {
      setIsPending(true);
      const req = await axiosInstance.get(url);
      setData(req.data);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsPending(false);
    }
  };

  const uploadImage = async (url, file) => {
    try {
      setIsPending(true);
      const res = await axiosInstance.post(url, file, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log(res.data);
      setData(res.data.secure_url); // rasmning URL'i shu yerda bo‘ladi
    } catch (error) {
      setError(error.message);
    } finally {
      setIsPending(false);
    }
  };

  return { postData, deletePost, getData, uploadImage, data, error, isPending };
};
