import express  from "express";
import morgan from "morgan";
import cors from "cors"
import { autherRouter } from "./routes/auther-router.js";
import { qouteRouter } from "./routes/quote-router.js";

const app= express();

//middleware
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

app.use("/",autherRouter)
app.use("/",qouteRouter)




export default app;

