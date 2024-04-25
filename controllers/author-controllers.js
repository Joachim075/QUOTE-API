import { PrismaClient } from "@prisma/client";
import statusCodes from "status-codes";
const prisma = new PrismaClient();

//post auther
const postAuther = async (req, res) => {
    
    try {
  let newAuther = await prisma.auther.create({ data: req.body });
  res.json({ message: "created", newAuther });
    } catch (error) {
      console.log(error)
        res.json({message:"Usere with email exists."})
    }
};

//get auther
const getAuther = async (req, res) => {
 try {
    const authers = await prisma.auther.findMany();
    res.send(authers);
 } catch (error) {
    res.json({error:"not good"})
 }
};

//get auther
const getAutherById = async (req, res) => {
    const id= parseInt(req.params.autherId)
    try {
        const auther = await prisma.auther.findUnique({
    where: { id:id }
  }
 )
 if (! id) {
  res.json({message:"not id"})
};
  res.send(auther);
    } catch (error) {
        console.log("here")
        res.json({error:"not good"})
    }
};

//delete auther by email
const deleteAuther = async (req, res) => {
  try {
    const auther = await prisma.auther.delete({
        where: { email: req.body.email },
      });
      res.json({ message: "Auther deleted successful", auther });
  } catch (error) {
    res.json({error:"not good"})
  }
};

//update auther
const updateAuther = async (req,res) => {
 try {
    const auther = await prisma.auther.update({
        where: { email: req.body.email },
        data: req.body,
      });
      res.send(auther);
      
 } catch (error) {
  console.log("am here",error)
    res.json({error:"not good"})
 }
};

export { postAuther, getAuther, getAutherById, deleteAuther, updateAuther };
