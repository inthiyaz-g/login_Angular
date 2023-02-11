import { Component, OnInit } from '@angular/core';
import{FormControl,FormGroup,Validators} from '@angular/forms'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  login = new FormGroup({
  username: new FormControl("",[Validators.required,Validators.minLength(6)]),
  password: new FormControl("",[Validators.required,Validators.minLength(6)]),
  addtoList : new FormControl("",[Validators.required,Validators.minLength(6)])

  })
  get name() { return this.login.get('username'); }
  listData=['1','2'];
  // get power() { return this.heroForm.get('power'); }
cval:any;
  ngOnInit(): void {
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
