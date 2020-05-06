import { Component, OnInit, Input } from '@angular/core';
import { AuthserviceService } from '../shared/authservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  @Input() loginUserData = {email:"",password:""}
  constructor(private _servc:AuthserviceService,private _router:Router) { }

  ngOnInit(): void {
  }
  loginData(){
    //console.log(this.loginUserData)
    this._servc.loginUser(this.loginUserData).subscribe(
       res => {console.log(res)
        localStorage.setItem('token',res.token)
        this._router.navigate(['/special'])
      },
       err => console.log(err),
      // window.alert('mail already exists pls login.!!')
    )
    }
}
