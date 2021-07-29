import { Component, Input, OnInit } from '@angular/core';
import { Employee } from 'Models/Employee';

@Component({
  selector: 'app-employee-info',
  templateUrl: './employee-info.component.html',
  styleUrls: ['./employee-info.component.css']
})


export class EmployeeInfoComponent implements OnInit 
{

 //Configuring the component to receive input inside employee variable.
 @Input('emp') employee: Employee=  
 {
  id:1000,
  name:"Not Found",
  salary:-10000,
  permanent:false,
  department:{id:0,name:""},
  skill:[],
  dateOfBirth:new Date(),
  photoURL:""
};


  
  constructor() { }

  ngOnInit(): void {
    
  }

}
