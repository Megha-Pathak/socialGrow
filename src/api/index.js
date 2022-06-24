import axios from "axios";

const unsplash = axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: `Client-ID ${process.env.Unsplash_API}`,
  },
});

export default unsplash;
