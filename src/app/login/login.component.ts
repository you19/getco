import { Component, OnInit } from '@angular/core';
import { Router } from '../../../node_modules/@angular/router';
import { AppService } from '../app.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  credentials = {
    username:'',
    password:''
  };
  constructor(public router:Router,public appservice:AppService) { }

  ngOnInit() {

  }
  login(){
    if(this.credentials.username=='user' && this.credentials.password=='password'){
    this.appservice.authenticate(this.credentials,()=>{
    this.router.navigate(['home/produit']);
  })

  }
  }
}
