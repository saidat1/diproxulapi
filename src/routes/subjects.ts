
import { createSubject, getBriefSubjects, getSubjects } from "@/controllers/subjects";
import express from "express";
const subjectRouter = express.Router();

// Departments Routes
subjectRouter.post("/subjects", createSubject);
subjectRouter.get("/subjects", getSubjects);
subjectRouter.get("/subjects/brief", getBriefSubjects);


export default subjectRouter;
