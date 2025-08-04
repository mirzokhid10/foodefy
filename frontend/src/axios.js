// src/axios.js
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8000/api", // Laravel backend URL
  withCredentials: true, // Needed for Laravel Sanctum if used
});

export default api;
