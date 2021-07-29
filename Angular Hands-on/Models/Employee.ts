import { Department } from "./Department";
import { Skills } from "./Skills";

export interface Employee
{
    //Defining required properties.
    id:number;
    name:string;
    salary:number;
    permanent:boolean;
    department:Department;
    skill:Skills[];
    dateOfBirth:Date;
    photoURL:string;
}