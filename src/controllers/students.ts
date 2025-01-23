import { db } from "@/db/db";
import { ParentCreateProps, StudentCreateProps, TypedRequestBody } from "@/types/types";
import { convertDateToIso } from "@/utils/convertDateToIso";
import { Request, Response } from "express";

export async function createStudent(req: TypedRequestBody<StudentCreateProps>, res: Response) {
  const data = req.body;
  const { email, BCN, regNo, dob, admissionDate } = data;
  data.dob = convertDateToIso(dob);
  data.admissionDate = convertDateToIso(admissionDate);

  try {
    // Check if the Student already exists
    const existingEmail = await db.student.findUnique({
      where: { email },
    });
    const existingBCN = await db.student.findUnique({
      where: { BCN },
    });
    const existingRegNo = await db.student.findUnique({
      where: { regNo },
    });

    if (existingBCN) {
      return res.status(409).json({
        status: 'error',
        message: 'Student with such BCN exists already.',
      });
    }
    if (existingEmail) {
      return res.status(409).json({
        status: 'error',
        message: 'Student with such Email exists already.',
      });
    }
    if (existingRegNo) {
      return res.status(409).json({
        status: 'error',
        message: 'Student with such RegNo exists already.',
      });
    }

    const newStudent = await db.student.create({
      data,
    });

    console.log(`Student created successfully: ${newStudent.firstName} (${newStudent.id})`);
    
    return res.status(201).json({
      status: 'success',
      message: 'Student created successfully',
      student: newStudent,  // Optional: You can return the student data here
    });

  } catch (error) {
    console.log(error);
    return res.status(500).json({
      status: 'error',
      message: 'Something went wrong',
    });
  }
}

export async function getStudents(req: Request, res: Response) {
  try {
    const students = await db.student.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
    return res.status(200).json(students);
  } catch (error) {
    console.log(error);
  }
}
export async function getNextStudentSequence(req: Request, res: Response) {
  try {
    const lastStudent = await db.student.findFirst({
      orderBy: {
        createdAt: "desc",
      },
    });
    const stringSeq = lastStudent?.regNo.split('/')[3]
    const lastSeq = stringSeq ? parseInt(stringSeq) : 0;
    const nextSeq = lastSeq+ 1;
    return res.status(200).json(nextSeq);
  } catch (error) {
    console.log(error);
  }
}
// export async function getCustomerById(req: Request, res: Response) {
//   const { id } = req.params;
//   try {
//     const customer = await db.customer.findUnique({
//       where: {
//         id,
//       },
//     });
//     return res.status(200).json(customer);
//   } catch (error) {
//     console.log(error);
//   }
// }
