import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID zjTimTmV15diN95WIFnk3jwraUFGn9wutoG8wC0wVWI",
  },
});
