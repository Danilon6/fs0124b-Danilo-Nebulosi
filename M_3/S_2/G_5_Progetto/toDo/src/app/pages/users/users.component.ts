import { Component } from '@angular/core';
import { TodoService } from '../../todo.service';
import { IUserWithToDos } from '../../Models/i-user-with-to-dos';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent {
  userWithToDos:IUserWithToDos[] = []

  constructor(private todoSvc:TodoService){}

  ngOnInit(){
    this.todoSvc.$userWithToDOs.subscribe(userWithToDos => {
      this.userWithToDos = userWithToDos
      console.log(userWithToDos[0].todo[0]);


    })

  }
}
