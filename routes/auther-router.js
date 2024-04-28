import express from "express";
import {
  deleteAuther,
  getAuther,
  getAutherById,
  postAuther,
  updateAuther,
} from "../controllers/author-controllers.js";
import { autherSchema, validate } from "../helper-functions/data-validation.js";
import { login } from "../helper-functions/create-token.js";
import { verifyToken } from "../helper-functions/verify-token.js";

const autherRouter = express.Router();
//auther routes
//login
autherRouter.post("/login",login);
//post author
autherRouter.post("/author",[verifyToken,validate(autherSchema)], postAuther);
//get author
autherRouter.get("/author",verifyToken,getAuther);
//get author by email
autherRouter.post("/author/:autherId",verifyToken, getAutherById);
//delete author by id
autherRouter.delete("/author",verifyToken, deleteAuther);
//update author by id
autherRouter.patch("/author",verifyToken, updateAuther);

export { autherRouter };
