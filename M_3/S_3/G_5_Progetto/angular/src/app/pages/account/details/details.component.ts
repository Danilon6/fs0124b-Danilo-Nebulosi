import { Component } from '@angular/core';
import { iUser } from '../../../models/i-user';
import { UsersService } from '../../../services/users.service';
import { AuthService } from '../../../auth/auth.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent {

  user!:iUser

  constructor(private authSvc:AuthService){}

  ngOnInit(){
    this.authSvc.$user.subscribe(user =>{
      if (user) {
        this.user = user
      }
    })
  }

  logout():void{
    this.authSvc.logout()
  }
}
