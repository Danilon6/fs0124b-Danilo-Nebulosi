import { Component } from '@angular/core';
import { iUser } from '../../models/i-user';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

  loggedUser:Partial<iUser> = {}

  constructor(private authSvc:AuthService){}


  ngOnInit(){
    this.authSvc.$user.subscribe(user =>{
      this.loggedUser = user!
    })
  }

  logout(){
    this.authSvc.logout()
  }

}
