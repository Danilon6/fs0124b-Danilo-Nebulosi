import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { iUser } from '../../models/i-user';
import { AuthService } from '../../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  newUser:Partial<iUser> = {}

  constructor(
    private authSvc:AuthService,
    private router:Router
    ){}

  register(){
    this.authSvc.register(this.newUser)
    .subscribe(data => {
      this.router.navigate(['/auth/login'])
    })
  }
}

