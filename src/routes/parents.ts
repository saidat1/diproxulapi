import { createParent, getParents } from "@/controllers/parents";
import express from "express";
const parentRouter = express.Router();

parentRouter.post("/parents", createParent);
parentRouter.get("/parents", getParents);

export default parentRouter;
