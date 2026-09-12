import { baseUrl } from "./base";
import axios from "axios";

function getTodos(options) {
  return baseApi.get("todos", options).then((response) => response.data);
}
