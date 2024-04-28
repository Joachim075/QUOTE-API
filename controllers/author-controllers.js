import { PrismaClient } from "@prisma/client";
import { StatusCodes } from "http-status-codes";
const prisma = new PrismaClient();
import bcrypt from "bcrypt"
//post auther
const postAuther = async (req, res) => {
  try {
    const auther= await prisma.auther.findUnique({
      where:{email:req.body.email}
    })
    if (auther!=null&&auther.email===req.body.email) {
       // give response if user exists
      res
        .status(StatusCodes.FORBIDDEN)
        .json({ message: "auther with this email already exists" });
    } else {
      //hash the password
bcrypt.hash(req.body.password, 10, async function (err,hash) {
  if (err) {
    res
      .status(StatusCodes.BAD_REQUEST)
      .json({ error: "failed to harsh password" });
  } else {
    //create auther
    let newAuther = await prisma.auther.create({ data: {...req.body,password:hash}});
  res.json({ message: "created", newAuther });
  }
});
    }
  } catch (error) {
    res.status(StatusCodes.EXPECTATION_FAILED).json({error:"didnt create user."});
  }  
}

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
 if (auther === null) {
  res.json({message:"invalid ID"});
 } else {
  res.json({auther})
 }
  res.send(auther);
    } catch (error) {
        console.log(error)
        res.json({error:"internal server error"})
    }
};

//delete auther by email
const deleteAuther = async (req, res) => {
  try {
    const auther = await prisma.auther.delete({
        where: { email: req.body.email },
      });
      if (auther===null) {
        res.json({message:"invalid email."});
      } else {
        res.json({ message: "Auther deleted successful", auther });
      }
      
  } catch (error) {
    res.json({error:"Internal server error."})
  }
};

//update auther
const updateAuther = async (req,res) => {
 try {
    const auther = await prisma.auther.update({
        where: { email: req.body.email },
        data: req.body,
      });

      if (auther===null) {
        res.json({message:"invalid email."});
      } else {
        res.send(auther);
      }
      
      
 } catch (error) {
  console.log(error)
    res.json({error:"internal server error"})
 }
};

export { postAuther, getAuther, getAutherById, deleteAuther, updateAuther };
