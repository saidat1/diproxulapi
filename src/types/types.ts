import { Gender, SubjectCategory, SubjectType, UserRole } from "@prisma/client";
import { Request} from "express";
export interface TypedRequestBody<T> extends Request {
 body: T
}

export type ContactProps = {
 fullName: string;
 email: string;
 phone: string;
 school: string;
 country: string;
 schoolPage: string;
 students: number;
 role: string;
 media: string;
 message: string;
};

export type UserCreateProps = {
 name: string;
 password: string;
 role: UserRole;
 email: string;
 phone?: string;
 image?: string;
 schoolName?: string;
 schoolId?: string;
};

export type UserLoginProps = {
 email: string;
 password: string;
};

// Generated TypeScript types corresponding to the Prisma models

export type ClassCreateProps = {      
 title: string;       
 slug: string;  
 schoolId: string;
};

export type DepartmentCreateProps = {      
 name: string;       
 slug: string;  
 schoolId: string;
};

export type SubjectCreateProps = {      
 name: string;
 slug: string;
 code: string;
 shortName: string;
 category: SubjectCategory;
 type: SubjectType;
 departmentId: string;
 departmentName: string;
};

export type StreamCreateProps = {     
 title: string;       
 slug: string;        
 classId: string; 
 schoolId: string;   
};

export type ParentCreateProps = {
 title: string;
 firstName: string;
 lastName: string;
 relationship: string;
 email: string;
 NIN: string;
 gender: string;
 dob: string;
 phone: string;
 nationality: string;
 whatsapNo: string;
 password: string;
 contactMethod: string;
 imageUrl: string;
 occupation: string;
 address: string;
 schoolId: string;
 userId: string;
};

export type StudentCreateProps = {
 name: string;
 firstName: string;
 lastName: string;
 email: string;
 parentName?: string;
 classTitle?: string;
 streamTitle?: string;
 parentId: string;
 classId: string;
 streamId: string;
 password: string;
 healthStatus: string;
 BCN: string;
 imageUrl: string;
 phone: string;
 nationality:string;
 religion: string;
 gender: string;
 dob: string;
 regNo: string;
 address: string;
 admissionDate: string;
 extraInfo: string;
 bloodGroup: string;
 schoolId: string;
 userId: string;
};

export type TeacherCreateProps = {
 title: string;
 firstName: string;
 lastName: string;
 email: string;
 phone: string;
 whatsappNo: string;
 nationality: string;
 NIN: string;
 gender: Gender;
 dateOfBirth: string;
 contactMethod: string;
 password: string;
 dateOfJoining: string;
 designation: string;
 departmentId: string;
 departmentName: string;
 qualification: string;
 mainSubject: string;
 mainSubjectId: string;
 subjects: string[];
 classIds: string[];
 classes: string[];
 experience: number;
 address: string;
 imageUrl: string;
 schoolId: string;
 userId: string;
};