//we not connect database directly with express
//we need external pkg mongoose
import mongoose from "mongoose";
import dotenv from "dotenv";
// import mongoose from "mongodb";

//initialize dotenv with config function
dotenv.config();

//username come from env file
const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

const Connection = () => {
  const MONGODB_URI = `mongodb+srv://${USERNAME}:${PASSWORD}@mern-todo.kasjqa5.mongodb.net/?retryWrites=true&w=majority`;

  mongoose.connect(MONGODB_URI, { useNewUrlParser: true });
  //connection is ON or connected
  mongoose.connection.on("connected", () => {
    console.log("Database connected successfully");
  });
  //if disconnected
  mongoose.connection.on("disconnected", () => {
    console.log("Database is disconnected.");
  });
  //if connection shown error
  mongoose.connection.on("error", () => {
    console.error("Shown error to connect with database.", error.message);
  });
};
export default Connection;
