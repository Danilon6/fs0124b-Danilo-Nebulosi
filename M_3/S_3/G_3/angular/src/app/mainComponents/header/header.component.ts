import { Component } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  show:boolean = false
  isLoggedIn:boolean = false

  constructor(private authSvc:AuthService){}

  ngOnInit(){

    this.authSvc.$isLoggedIn.subscribe(isLoggedIn =>{
      this.isLoggedIn = !!isLoggedIn
    })


  }
}
