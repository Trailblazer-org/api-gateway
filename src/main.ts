import express from "express";
import { createProxyMiddleware } from "http-proxy-middleware";

const app = express();

// Middleware to Users
app.use(
  "/users",
  createProxyMiddleware({
    target: "http://localhost:8003",
  })
);

// Middleware to threads
app.use(
  "/threads",
  createProxyMiddleware({
    target: "http://localhost:8001",
  })
);

// Middleware to Replies
app.use(
  "/replies",
  createProxyMiddleware({
    target: "http://localhost:8002",
  })
);

// SERVER LISTENING
app.listen(8000, () => console.log("Server started on port 8000"));
