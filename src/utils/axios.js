import axios from "axios";

export const axiosHttp = axios.create({
  baseURL: import.meta.env.VITE_URL_API,
});


axiosHttp.interceptors.request.use(
  (config) => {
    const currentUser = localStorage.getItem("token")
      ? localStorage.getItem("token")
      : "";
    if (currentUser) {
      config.headers["Authorization"] = `Bearer ${currentUser} `;
    }
    return config;
  },
  (error) => Promise.reject(error)
);