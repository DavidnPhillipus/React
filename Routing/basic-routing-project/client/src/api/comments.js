import { baseUrl } from "./base";
import axios from "axios";

function getComments(options) {
  return baseApi
    .get(`posts/${id}/comments`, options)
    .then((response) => response.data);
}
