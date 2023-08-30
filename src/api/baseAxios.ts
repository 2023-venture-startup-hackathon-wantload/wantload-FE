import axios from "axios";

export const baseAxios = axios.create({
  baseURL: "https://15.165.26.250:8080",
});
