// const express = require('express');
import express from "express";
//in this import extension is important
import bodyParser from "body-parser";
import Connection from "./database/db.js";
import cors from "cors";
import Routes from "./routes/route.js";
import path from "path";

const __dirname = path.resolve();

//initialize express
const app = express();

// all about cors
app.use(cors());
app.use(express.json({ encoded: true }));
app.use(express.urlencoded({ encoded: true }));
app.use("/", Routes);

app.get("*", function (_, res) {
  res.sendFile(
    path.join(__dirname, "./client/build/index.html"),
    function (error) {
      res.statusCode(500).send(err);
    }
  );
});

const PORT = process.env.PORT || 8000;
Connection();
//call function to make a express server
//it take two argument (1. port) (2. call back function)
app.listen(PORT, () =>
  console.log(`your server is running successfully on port ${PORT}`)
);
