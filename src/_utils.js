import axios from "axios";

export const Axios = axios.create({
  baseURL: "https://api.themoviedb.org/3/movie",
  params: {
    api_key: "62a63e99e24cf6c6b6793a961f73e879"
  }
});
