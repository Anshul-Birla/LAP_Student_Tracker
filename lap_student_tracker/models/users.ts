import {object, string, TypeOf } from 'yup';
export const requestUserSchema = object({
    email:string().ensure().required(), 
    role:string().ensure().required().oneOf(["Admin", "Volunteer", "Teacher", "Student", "Parent"]), 
    phone:string().optional(), 
    firstName:string().optional(), 
    lastName:string().optional()
});

export const userSchema = object({
    id: string().ensure().required(), 
    role:string().ensure().required().oneOf(["Admin", "Volunteer", "Teacher", "Student", "Parent"]), 
    phone:string().optional(), 
    firstName:string().optional(), 
    lastName:string().optional()
})

export type RequestUser = TypeOf<typeof requestUserSchema>;
export type User = TypeOf<typeof userSchema>;


