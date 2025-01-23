import { createTeacher, getTeachers } from "@/controllers/teachers";
import express from "express";
const teacherRouter = express.Router();

teacherRouter.post("/teachers", createTeacher);
teacherRouter.get("/teachers", getTeachers);

export default teacherRouter;
