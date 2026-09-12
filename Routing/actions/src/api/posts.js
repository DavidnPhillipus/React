import { baseUrl } from "./base";
import axios from "axios";

function getPosts(options) {
  return baseApi.get("posts", options).then((response) => response.data);
}

function getPost(id, options) {
  return baseUrl.get(`posts/${id}`, options).then((response) => response.data);
}
