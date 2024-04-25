import express  from "express"
import { postQuote, getQuote, getQuoteById, deleteQuote, updateQuote } from "../controllers/quote-controllers.js";


const qouteRouter= express.Router()

//quote routes
//post quote
qouteRouter.post("/quote",postQuote)
//get quote
qouteRouter.get("/quote",getQuote)
//get quote by id
qouteRouter.get("/quote/:quoteId",getQuoteById)
//delete quote by id
qouteRouter.delete("/quote",deleteQuote)
//update quote by id
qouteRouter.patch("/quote",updateQuote)

export{qouteRouter}