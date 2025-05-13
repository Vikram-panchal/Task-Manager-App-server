require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const cors = require("cors");
const connectDB = require("./config/db");
const path = require("path");

const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");
const taskRoutes = require("./routes/taskRoutes");
const reportRoutes = require("./routes/reportRoutes");

//Middleware to handel cors
app.use(cors({
    origin: process.env.CLIENT_URL ||"*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"]
}));

//Db Connection
connectDB();

// const __dirname = path.resolve();
//Middleware to handel json data
app.use(express.json());


 //Routes
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/tasks", taskRoutes);
app.use("/api/repots", reportRoutes);

//Server upload folder
// app.use("/uploads", express.static(path.join(__dirname, "uploads")));


 //Start Server

// if(process.env.NODE_ENV === "production"){
//     app.use(express.static(path.join(__dirname, "../frontend/dist")));
//     app.get("*", (req, res) => {
//         res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
//     });
// }

 app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
  });