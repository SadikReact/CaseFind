import axios from "axios";

const instance = axios.create({
  baseURL: "http://13.239.67.240:5000/",
});

export default instance;
