import express from "express";
import connectDB from "./config/db.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();

// Middleware
app.use(express.json());

// Connect to MongoDB once before server starts
connectDB();

// Test route
app.get("/", (req, res) => {
  res.send("Server is running! 🚀");
});

// Start server
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
