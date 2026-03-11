import express from "express";
import connectDB from "./config/db.js";
import dotenv from "dotenv";
import router from "./routes/user.route.js";

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

// register route
app.use("/api/auth", router);

// Start server
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
