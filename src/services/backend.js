import axios from "axios";

import config from "../config";

const backend = axios.create({
  baseURL: config.urlApi,
  timeout: 120000,
  headers: { "Content-Type": "application/json" },
});

export default backend;
