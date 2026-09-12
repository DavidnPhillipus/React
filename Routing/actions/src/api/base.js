import baseApi from "axios";

export const baseUrl = axios.create({ baseUrl: import.meta.env.VITE_API_URL });
