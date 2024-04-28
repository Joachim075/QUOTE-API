import { PrismaClient } from "@prisma/client";
import statusCodes from "http-status-codes";

const prisma = new PrismaClient();

//post quote
const postQuote = async (req, res) => {
    try {
    
  let newquote = await prisma.quotes.create({ data: req.body });
  res.json({ message: "created", newquote });
  
    } catch (error) {
      console.log(error)
       res.json({error:"internal server error"}) 
    }
};

//get quote
const getQuote = async (req, res) => {
    try {
        
  const quotes = await prisma.quotes.findMany();
  res.send(quotes);
        
    } catch (error) {
        res.json({error:"not good"})
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
      res.json({message:"invalid quote id."});
    } else {
      res.send(quote);
    }
    
    } catch (error) {
        res.json({error:"not good"})
    }
};

//delete quote by id
const deleteQuote = async (req, res) => {
  const id = parseInt(req.body.id)  
  if (! id) {
    res.json({message:"id not found"})
  } else {
    try { 
      const quote = await prisma.quotes.delete({
        where: { id: id },
      })
      ;
      res.json({ message: "quote deleted successful", quote });
        } catch (error) {
          console.log(error)
            res.json({message:"id not found"})
        }
  }
 
};

//update quote
const updateQuote = async (req,res) => {
  const id = parseInt(req.body.id)
 if (! id) {
  res.json({message:"id not found"})
 } else {
  try {  
  const quote = await prisma.quotes.update({
    where: { id:id },
    data: req.body,
  });
  res.send(quote);
    } catch (error) {
      console.log(error)
        res.json({error:"not good"})
    }
 }
    
};
export { postQuote, getQuote, getQuoteById, deleteQuote, updateQuote };