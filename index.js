import express  from "express";
import morgan from "morgan";
import cors from "cors"
import { autherRouter } from "./routes/auther-router.js";
import { qouteRouter } from "./routes/quote-router.js";

const app= express();

const PORT= process.env.PORT || 4000;

//middleware
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

erver.get("/", (req, res) => {
  
    res.json({message: "Hello, Welcome to quote_API"})


});

app.use(autherRouter)
app.use(qouteRouter)




app.listen(1000,()=>{ console.log(`server is running on port ${PORT}`)})

