require("dotenv").config();

const cookieParser = require("cookie-parser");
const cors = require("cors");
const express = require("express");
const sequelize = require("./database/connection");

sequelize.sync().then(() => console.log("Database is ready"));

const app = express();
const router = require("./routers/router");

const port = 3000;

var corsOptions = {
    origin: 'http://localhost:5173',
    optionsSuccessStatus: 200,
    credentials: true
}

app.use(cors(corsOptions));
app.use(cookieParser());
app.use(express.json());
app.use("/api/v1", router);

app.listen(port, console.log("Server has been started"));