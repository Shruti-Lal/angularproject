import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  myLoginForm:FormGroup;
  constructor(){
    this.myLoginForm=new FormGroup(
      {
        username:new FormControl('sd',[Validators.required,Validators.minLength(5),Validators.maxLength(8)]),
        password:new FormControl('sd',[Validators.required,Validators.minLength(4),Validators.maxLength(7)]),
        gender:new FormControl('',Validators.required),
        course:new FormControl('',Validators.required),
        timings:new FormControl('',Validators.required),
        accept:new FormControl('',Validators.required)
      }
    )
  }
  public verifyUser(){
    console.log("verifyUser");
    console.log("Username-"+this.myLoginForm.controls.username.value);
    console.log("Password-"+this.myLoginForm.controls.password.value);
    console.log("Gender-"+this.myLoginForm.controls.gender.value);
    console.log("Course-"+this.myLoginForm.controls.course.value);
    console.log("Timings-"+this.myLoginForm.controls.timings.value);
    console.log("ACCEPT-"+this.myLoginForm.controls.accept.value);
    this.myLoginForm.reset();
    console.log("Username-"+this.myLoginForm.controls.username.value);
    console.log("Passwod-"+this.myLoginForm.controls.password.value);
    console.log("Gender-"+this.myLoginForm.controls.gender.value);
    
    console.log("Course-"+this.myLoginForm.controls.course.value);
    console.log("Timings-"+this.myLoginForm.controls.timings.value);

  }
}
