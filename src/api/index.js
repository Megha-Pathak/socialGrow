import axios from "axios";

const unsplash = axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID YPbFlqquzZluFyyu77toCpAMoFFdgoPvb1ErY62dqx0",
  },
});

export default unsplash;
