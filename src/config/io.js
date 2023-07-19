import server from "./http";
import { Server } from "socket.io";
import noteSocket from "../sockets/note.socket.js";

const io = new Server(server);

io.on("connection", client => noteSocket(io, client));
