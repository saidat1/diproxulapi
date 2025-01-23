import { createStudent, getNextStudentSequence, getStudents } from "@/controllers/students";
import express from "express";
const studentRouter = express.Router();

studentRouter.post("/students", createStudent);
studentRouter.get("/students", getStudents);
studentRouter.get("/students/seq", getNextStudentSequence)

export default studentRouter;
