const mongoose = require("mongoose");
const dotenv = require("dotenv");
const express = require("express");
const path = require("path");
dotenv.config();

const server = express();
const cors = require("cors");
server.use(express.static(path.resolve(__dirname, process.env.PUBLIC_DIR)));
const productRouter = require("./routes/product");
const userRouter = require("./routes/user");

// Database connection
mongoose.set("strictQuery", false);

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Mongo database connected");
  } catch (err) {
    console.error("Mongo database connection failed:", err);
  }
};

// Body parser
server.use(cors());
server.use(express.json());
//const PORT = process.env.PORT || 3000;

// Routes
server.use("/products", productRouter.router);
server.use("/users", userRouter.router);

server.use("*", (req, res) => {
  res.sendfile(path.resolve(__dirname, "build", "index.html"));
});

// Start server
server.listen(process.env.PORT, () => {
  connect();
  console.log("Server started on port 4000");
});
