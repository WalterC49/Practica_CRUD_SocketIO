import http from "http";
import app from "./express.js";

const server = http.createServer(app);

export default server;
