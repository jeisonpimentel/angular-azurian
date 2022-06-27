import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  myFunc(){
    console.log("function called");
    var inputValue = (<HTMLInputElement>document.getElementById("login-username")).value;
    if(inputValue===""){
      alert("ingresar correo")
    }
  }

}
