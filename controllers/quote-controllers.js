import { PrismaClient } from "@prisma/client";
import StatusCodes from "http-status-codes";

const prisma = new PrismaClient();

//post quote
const postQuote = async (req, res) => {
    try {
    
  let newquote = await prisma.quotes.create({ data: req.body });
  res.status(StatusCodes.OK).json({ message: "created", newquote });
  
    } catch (error) {
      console.log(error)
       res.status(StatusCodes.EXPECTATION_FAILED).json({error:"internal server error"}) 
    }
};

//get quote
const getQuote = async (req, res) => {
    try {
        
  const quotes = await prisma.quotes.findMany();
  res.status(StatusCodes.OK).send(quotes);
        
    } catch (error) {
        res.status(StatusCodes.EXPECTATION_FAILED).json({error:"internal server error"})
    }
};

//get quote
const getQuoteById = async (req, res) => {
    try {
        
    const id= parseInt(req.params.quoteId)
 
    const quote = await prisma.quotes.findUnique({
      where: { id:id },
    });
    if (quote===null) {
      res.status(StatusCodes.FORBIDDEN).json({message:"invalid quote id."});
    } else {
      res.status(StatusCodes.OK).send(quote);
    }
    
    } catch (error) {
        res.status(StatusCodes.EXPECTATION_FAILED).json({error:"not good"})
    }
};

//delete quote by id
const deleteQuote = async (req, res) => {
  const id = parseInt(req.body.id)  
  if (! id) {
    res.status(StatusCodes.FORBIDDEN).json({message:"id not found"})
  } else {
    try { 
      const quote = await prisma.quotes.delete({
        where: { id: id },
      })
      ;
      res.status(StatusCodes.OK).json({ message: "Quote deleted successful", quote });
        } catch (error) {
          console.log(error)
            res.status(StatusCodes.EXPECTATION_FAILED).json({error:"Internal server error."})
        }
  }
 
};

//update quote
const updateQuote = async (req,res) => {
  const id = parseInt(req.body.id)
 if (! id) {
  res.status(StatusCodes.EXPECTATION_FAILED).json({message:"id not found"})
 } else {
  try {  
  const quote = await prisma.quotes.update({
    where: { id:id },
    data: req.body,
  });
  res.status(StatusCodes.OK).send(quote);
    } catch (error) {
      console.log(error)
        res.status(StatusCodes.EXPECTATION_FAILED).json({error:"internal server error."})
    }
 }
    
};
export { postQuote, getQuote, getQuoteById, deleteQuote, updateQuote };