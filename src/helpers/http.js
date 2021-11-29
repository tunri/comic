import axios from "axios";

const http = axios.create({
    baseURL: "http://cors-anywhere.herokuapp.com",
});

export default http;
