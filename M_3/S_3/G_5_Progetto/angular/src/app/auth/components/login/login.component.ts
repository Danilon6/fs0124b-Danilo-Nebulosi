import { Component } from '@angular/core';
import { iLogindata } from '../../../models/i-logindata';
import { AuthService } from '../../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  loginUser: iLogindata = {
    email: '',
    password: ''
  }

  constructor(
    private authSvc: AuthService,
    private router: Router
  ) { }

  login() {
    this.authSvc.login(this.loginUser)
      .subscribe(data => {
        this.router.navigate(['/movies'])
      })
  }
}
