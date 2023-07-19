import "./config/env.js";
import server from "./config/http.js";
import { Server } from "socket.io";
import noteSocket from "./sockets/note.socket.js";

const io = new Server(server);

io.on("connection", client => noteSocket(io, client));

const main = () => {
  server.listen(process.env.PORT);
  console.log(`Server at http://localhost:${process.env.PORT}`);
};

main();
