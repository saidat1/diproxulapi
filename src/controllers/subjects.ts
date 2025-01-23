import { db } from "@/db/db";
import { SubjectCreateProps,TypedRequestBody } from "@/types/types";
import { generateSlug } from "@/utils/generateSlug";
import { Request, Response } from "express";

// Department controler
export async function createSubject(req: TypedRequestBody<SubjectCreateProps>, res: Response) {
  const data = req.body;
  const slug = generateSlug(data.name);
  data.slug = slug
  try {
    // Check if the department already exists\
    const existingSubject = await db.subject.findUnique({
      where: {
        slug,
      },
    });
    if (existingSubject) {
      return res.status(409).json({
        data: null,
        error: "Subject Already exists.",
      });
    }
    const newSub = await db.subject.create({
      data,
    });
    console.log(
      `Subject created successfully: ${newSub.name} (${newSub.id})`
    );
    return res.status(201).json({
      data: newSub,
      error: null,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: null,
      error: "Failed to create subject",
    });
  }
}
export async function getSubjects(req: Request, res: Response) {
  try {
    const subjects = await db.subject.findMany({
      orderBy: {
        createdAt: "desc",
      }
    });
    return res.status(200).json(subjects);
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      error: "Failed to fetch Subjects",
    });
  }
}
export async function getBriefSubjects(req: Request, res: Response) {
  try {
    const subjects = await db.subject.findMany({
      orderBy: {
        createdAt: "desc",
      },
      select:{
        id:true,
        name:true,
      }
    });
    return res.status(200).json(subjects);
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      error: "Failed to fetch Subs",
    });
  }
}