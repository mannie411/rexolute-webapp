import axios from "axios";

const apiBaseUrl = () => {
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

  console.log("apiBaseUrl: ", baseUrl);

  return baseUrl;
};

const api = axios.create({
  baseURL: apiBaseUrl() + "/api",
  timeout: 10000,
  headers: { "Content-Type": "application/json" },
});

export default api;
