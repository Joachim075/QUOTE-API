import express from "express";
import morgan from "morgan";
import cors from "cors";
import { autherRouter } from "./routes/auther-router.js";
import { qouteRouter } from "./routes/quote-router.js";

const app = express();

const PORT = process.env.PORT || 4000;

// Middleware
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

// Redirect root URL to autherRouter
app.get("/", (req, res) => {
  res.redirect("/auther");
});

// Routes
app.use("/auther", autherRouter);
app.use("/quote", qouteRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
