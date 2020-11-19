import { Lexer } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  

  constructor(private router : Router) { }
  email: boolean = true;
  phone: boolean = false;
  model: any = {};
  mode: any = {};
  ngOnInit() {
  }
  validate() {
    if (this.model.name === 'admin' && this.model.pass === 'admin') {
      // alert('valid');
      this.router.navigateByUrl('welcome');
    } else {
      alert('incorrect');
    }
  }
  isShown: boolean = false ; // hidden by default


  toggleShow() {
  
  this.isShown = ! this.isShown;
  
  }  

  clickedAction(value : any){
    if (value === 'email'){
      this.email = true;
      this.phone = false;
    }
    else{
      this.email = false;
      this.phone = true;
    }

  }                                                                                                                                                                                                                                                                                              
  checkdob() {
    console.log(this.mode.dob,this.mode.user)
    if (this.mode.dob === '2020-01-01' && this.mode.user === 'admi') {
this.router.navigateByUrl('welcome');
      // alert('correct');
    
    } else {
      alert('incorrect');
    }
  }
}
