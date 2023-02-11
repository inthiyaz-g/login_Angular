import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import {LoginComponent} from '../login/login.component';
import {MyServiceService} from '../my-service.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private loginservice:MyServiceService ,private router: Router) { }
  username:any;
  ngOnInit(): void {
    // this.data= this.loginservice.loadData().pipe()
    // console.log(this.data)




    // this.loginservice.loadData().subscribe(users => {
    //     this.user = users;
    // });
    this.username = localStorage.getItem('username')
  }
  logout(){
    // localStorage.removeItem('user');
    localStorage.removeItem('username')

this.router.navigate([''])
  }
}
