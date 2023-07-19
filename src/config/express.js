import express from "express";
import { join } from "path";

const app = express();

app.use(express.static(join(__dirname, "../public")));

export default app;
