import jwt from "jsonwebtoken";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
const prisma = new PrismaClient();

const login = async (req, res) => {
   // auther login details
   const { email, password } = req.body;
   
   try {
      
      // Compare email if auther exists
      const auther = await prisma.auther.findUnique({
         where: { email: email }
      });

      if (!auther) {
         return res.status(404).json({ message: "auther not found" });
      }
      if (bcrypt.compareSync(password, auther.password)) {
         // Create token
         let autherData = {
            name: auther.name,
            autherId: auther.id
           
         };
         let token = jwt.sign(autherData,"jwt-key", { expiresIn: "24h" });
         res.json(token);
      } else {
         console.log(error);
         return res.status(401).json({ message: "Invalid credentials" });
      }
   } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Internal server error" });
   }
};

export { login };
