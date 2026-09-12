import { baseUrl } from "./base";
import axios from "axios";

function getUsers(options) {
  return baseUrl.get("users", options).then((response) => response.data);
}

function getUser(id, options) {
  return baseUrl.get(`users/${id}`, options).then((response) => response.data);
}
