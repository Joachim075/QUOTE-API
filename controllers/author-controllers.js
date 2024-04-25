import { PrismaClient } from "@prisma/client";
import statusCodes from "status-codes";
const prisma = new PrismaClient();
import bcrypt from "bcrypt"
//post auther
const postAuther = async (req, res) => {
    
//hash the password
bcrypt.hash(req.body.password, 10, async function (err,hash) {
  if (err) {
    res
      .status(statusCodes.BAD_REQUEST)
      .json({ error: "failed to harsh password" });
  } else {
    //create auther
    let newAuther = await prisma.auther.create({ data: {...req.body,password:hash}});
  res.json({ message: "created", newAuther });
  }
});}

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
