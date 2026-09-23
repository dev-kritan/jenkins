import express from "express";
import cors from "cors";
import todoRoutes from "./routes/todo.route.js";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/health", (_req, res) => {
  res.json({
    status: "ok",
    message: "Todo API is running",
  });
});

app.get("/", (_req, res) => {
  res.json({
    status: "ok",
    message: "Todo Backend API is running",
  });
});

app.use("/api/todos", todoRoutes);

export default app;
