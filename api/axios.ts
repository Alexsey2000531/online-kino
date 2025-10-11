import axios from "axios";

const KINOPOISK_API_URL = process.env.NEXT_PUBLIC_BASE_URL;
const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

if (!API_KEY) {
  throw new Error("API_KEY is not defined in environment variables");
}

if (!KINOPOISK_API_URL) {
  throw new Error("BASE_URL is not defined in environment variables");
}

export const apiClient = axios.create({
  baseURL: KINOPOISK_API_URL,
  headers: {
    "X-API-KEY": API_KEY,
    "Content-Type": "application/json",
  },
});
