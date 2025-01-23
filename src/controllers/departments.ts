import { db } from "@/db/db";
import { DepartmentCreateProps,TypedRequestBody } from "@/types/types";
import { generateSlug } from "@/utils/generateSlug";
import { Request, Response } from "express";

// Department controler
export async function createDepartment(req: TypedRequestBody<DepartmentCreateProps>, res: Response) {
  const data = req.body;
  const slug = generateSlug(data.name);
  data.slug = slug
  try {
    // Check if the department already exists\
    const existingDepartment = await db.department.findUnique({
      where: {
        slug,
      },
    });
    if (existingDepartment ) {
      return res.status(409).json({
        data: null,
        error: "Department Already exists.",
      });
    }
    const newDep = await db.department.create({
      data,
    });
    console.log(
      `Department created successfully: ${newDep.name} (${newDep.id})`
    );
    return res.status(201).json({
      data: newDep,
      error: null,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: null,
      error: "Something went wrong",
    });
  }
}
export async function getDepartments(req: Request, res: Response) {
  try {
    const deps = await db.department.findMany({
      orderBy: {
        createdAt: "desc",
      },
      include:{
        teachers:true,
        subjects:true,
      }
    });
    return res.status(200).json(deps);
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      error: "Failed to fetch departments",
    });
  }
}

export async function getBriefDepartments(req: Request, res: Response) {
  try {
    const deps = await db.department.findMany({
      orderBy: {
        createdAt: "desc",
      },
      select:{
        id:true,
        name:true
      }
    });
    return res.status(200).json(deps);
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      error: "Failed to fetch departments",
    });
  }
}
