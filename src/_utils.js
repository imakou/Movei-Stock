import axios from "axios";
import { shuffle } from "lodash";
export const Axios = axios.create({
  baseURL: "https://api.themoviedb.org/3/movie",
  params: {
    api_key: "62a63e99e24cf6c6b6793a961f73e879",
    language: "en"
  }
});

export const RandomBGC = () => {
  const colors = [
    "linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%)",
    "linear-gradient(120deg, #a8edea 0%, #fed6e3 100%)",
    "linear-gradient(120deg, #fdfcfb 0%, #e2d1c3 100%)",
    "linear-gradient(120deg, #fff1eb 0%, #ace0f9 100%)",
    "linear-gradient(120deg, #e9defa 0%, #fbfcdb 100%)",
    "linear-gradient(120deg, #93a5cf 0%, #e4efe9 100%)",
    "linear-gradient(120deg, #f3e7e9 0%, #e3eeff 100%)",
    "linear-gradient(120deg, #df89b5 0%, #bfd9fe 100%)",
    "linear-gradient(120deg, #20E2D7 0%, #F9FEA5 100%)",
    "linear-gradient(120deg, #7DE2FC 0%, #B9B6E5 100%)",
    "linear-gradient(120deg, #dad4ec 0%, #f3e7e9 100%)",
    "linear-gradient(120deg, #0ba360 0%, #3cba92 100%)"
  ];

  return shuffle(colors).slice(0, 1);
};
