import express  from "express"
import { postQuote, getQuote, getQuoteById, deleteQuote, updateQuote } from "../controllers/quote-controllers.js";
import { verifyToken } from "../helper-functions/verify-token.js";


const qouteRouter= express.Router()

//quote routes
//post quote
qouteRouter.post("/quote",verifyToken,postQuote)
//get quote
qouteRouter.get("/quote",verifyToken,getQuote)
//get quote by id
qouteRouter.get("/quote/:quoteId",verifyToken,getQuoteById)
//delete quote by id
qouteRouter.delete("/quote",verifyToken,deleteQuote)
//update quote by id
qouteRouter.patch("/quote",verifyToken,updateQuote)

export{qouteRouter}