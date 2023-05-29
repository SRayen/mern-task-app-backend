const dotenv = require("dotenv").config();
const express = require("express");
const connectDB = require("./config/connectDB");
const Task = require("./models/taskModel");
const taskRoutes = require("./routes/taskRoute");
const cors = require("cors");

const app = express();

//Middlewares
//To send data in the body (form : Form JSON)
app.use(express.json());
//To send data in the body (form : Form URL Encoded)
app.use(express.urlencoded({ extended: false }));

// app.use(cors({ origin: ["http://localhost:3000"] }));
app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "https://mern-task-app-5zyn.onrender.com",
    ],
  })
);

app.use("/api/tasks", taskRoutes);

//Routes
app.get("/", (req, res) => {
  res.send("Home page");
});

const PORT = process.env.PORT || 5000;

/* Technically we must first connect to DB ,then to the server (if the server sends immediately a request ==>No problem 
  beacause we are aleready connected to DB ) */

const startServer = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

startServer();
