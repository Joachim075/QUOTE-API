import express from "express";
import {
  deleteAuther,
  getAuther,
  getAutherById,
  postAuther,
  updateAuther,
} from "../controllers/author-controllers.js";
import { autherSchema, validate } from "../helper-functions/data-validation.js";

const autherRouter = express.Router();
//auther routes
//post author
autherRouter.post("/author",[validate(autherSchema)], postAuther);
//get author
autherRouter.get("/author", getAuther);
//get author by email
autherRouter.get("/author/:autherId", getAutherById);
//delete author by id
autherRouter.delete("/author", deleteAuther);
//update author by id
autherRouter.patch("/author", updateAuther);

export { autherRouter };
