import { createSchool, getSchoolById, getSchools } from "@/controllers/schools";
import express from "express";
const schoolRouter = express.Router();

schoolRouter.post("/schools", createSchool);
schoolRouter.get("/schools", getSchools);
schoolRouter.get("/schools/:id", getSchoolById);

export default schoolRouter;
