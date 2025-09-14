import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://recipes-api-gimd.onrender.com",
});
