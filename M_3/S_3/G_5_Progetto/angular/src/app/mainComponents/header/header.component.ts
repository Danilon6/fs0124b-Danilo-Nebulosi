import { Component } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { iLogindata } from '../../models/i-logindata';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  show:boolean = false

  isUserLoggedIn:boolean = false

  constructor(private authSvc:AuthService){}

  ngOnInit(){
    this.authSvc.isLoggedIn$.subscribe(data => {
      this.isUserLoggedIn = data;
    })
  }

  logout():void{
    this.authSvc.logout()
  }
}
