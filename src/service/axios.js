import axios from "axios";

const defaultAxios = axios.create();

defaultAxios.defaults.timeout = 15000;
defaultAxios.defaults.baseURL = "http://localhost:8081";
defaultAxios.defaults.withCredentials = true;

export default defaultAxios;
