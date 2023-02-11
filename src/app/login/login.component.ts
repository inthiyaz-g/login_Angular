import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import{FormControl,FormGroup,Validators} from '@angular/forms'
import { Router } from '@angular/router';
import {MyServiceService} from '../my-service.service'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private myservice:MyServiceService,private router: Router) { }

  login = new FormGroup({
  username: new FormControl("",[Validators.required,Validators.minLength(6)]),
  password: new FormControl("",[Validators.required,Validators.minLength(6)]),

  })
  get name() { return this.login.get('username'); }
  listData=['1','2'];
  // get power() { return this.heroForm.get('power'); }
cval:any;
data=null;
loginData:any;
  ngOnInit(): void {
  }
  loginProcess(){
    if(!this.login.valid){
alert("enter details")
    }else{

    
    this.myservice.loadData(this.login.value).subscribe((data:any)=> {
      alert("userlogin successfull")
    //  this.loginData = data;
     localStorage.setItem('username', data.username);

    //  console.log(this.loginData)
      this.router.navigate(['/home'])
    },(err: HttpErrorResponse)=>{

      alert("login failed ")
    })
//     this.myservice.loadData(this.login.value).subscribe(result =>{
//       if(result.ok){
//         alert("result.message")

//       }
//       else{
//         alert("login success")
//       }
// this.loginData = result;
//       console.log("data" + this.loginData)
//       console.log("data")

//     }
      
       
//       )
  }
  }

  submitdata(){
    // this.cval = this.login.controls['username'].value;
    // if(this.cval == null){
    //   alert(1)
    // }
    console.log(this.login);
  }

  nodata:boolean=true;

  addTo(){
  
    this.listData.push(this.login.controls['addtoList'].value)
    console.log(this.login)
  }
}
