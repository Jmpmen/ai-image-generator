const express = require("express");
const app = express();
const logger = require("morgan");
const openaiRoutes = require("./routes/openai");

//Use .env file in config folder
require("dotenv").config({ path: "./config/.env" });

//Using EJS for views
app.set("view engine", "ejs");

//Static Folder
app.use(express.static("public"));

//Body Parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Logging
app.use(logger("dev"));

//Setup Routes For Which The Server Is Listening
app.use("/", openaiRoutes);

//Server Running
app.listen(process.env.PORT, () => {
    console.log(`Server is running.`);
  });