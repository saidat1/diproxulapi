
import { createDepartment, getBriefDepartments, getDepartments } from "@/controllers/departments";
import express from "express";
const departmentRouter = express.Router();

// Departments Routes
departmentRouter.post("/departments", createDepartment);
departmentRouter.get("/departments", getDepartments);
departmentRouter.get("/departments/brief", getBriefDepartments);


export default departmentRouter;
