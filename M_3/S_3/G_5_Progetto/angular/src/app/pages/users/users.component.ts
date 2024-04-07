import { Component } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { iUser } from '../../models/i-user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent {

  usersArr:iUser[] =[]

  constructor(private usersSvc:UsersService){}

  ngOnInit(){
    this.usersSvc.getUsers().subscribe(users => {
      this.usersArr = users
    })
  }
}
