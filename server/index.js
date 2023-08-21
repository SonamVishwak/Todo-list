import express from "express";
import Connection from "./database/db.js";
import Routes from "./routes/route.js"
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
dotenv.config();

const PORT = 8080;
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;
const app = express();
app.use(cors());
app.use(bodyParser.json({extended: true}));
app.use(bodyParser.urlencoded({extended:true}));
app.use("/", Routes);
Connection(username, password);
app.listen(PORT,()=> console.log(`Your server is running sucessfully ${PORT}`));