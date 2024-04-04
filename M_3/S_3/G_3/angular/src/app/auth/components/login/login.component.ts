import { Component } from '@angular/core';
import { AuthService } from '../../auth.service';
import { Router } from '@angular/router';
import { ILoginData } from '../../../models/i-login-data';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  loginUser:ILoginData = {
    email: '',
    password: ''
  }

  constructor(
    private authSvc:AuthService,
    private router:Router
    ){}

    login(){
      this.authSvc.login(this.loginUser)
      .subscribe(data =>{
        this.router.navigate(['/dashboard'])
      })
    }
}
