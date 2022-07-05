import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import path from "path";

dotenv.config();
const { PORT = 8000, NODE_ENV = "production" } = process.env;

const STATIC_PATH =
     NODE_ENV == "development" ? path.resolve(__dirname, "client", "build") : path.resolve(__dirname, "public");

const app = express();

app.use(cors());
app.use(express.static(path.resolve(STATIC_PATH)));

app.listen(PORT, () => {
     console.log("server started at http://localhost:" + PORT);
});
