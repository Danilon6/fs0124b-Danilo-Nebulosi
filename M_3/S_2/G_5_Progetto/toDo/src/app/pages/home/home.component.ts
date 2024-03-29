import { iCombinedObject } from './../../Models/i-combined-object';
import { iUsers } from './../../Models/users';
import { UsersService } from './../../users.service';
import { Component } from '@angular/core';
import { TodoService } from '../../todo.service';
import { iTodo } from '../../Models/todo';

interface iSingleObject extends iTodo, iUsers{
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  todoUserArr:iSingleObject[] = []

  constructor(private todoSvc:TodoService, private userSvc:UsersService){}

  ngOnInit(){
    this.todoSvc.$toDoAndUser.subscribe(todoAndUserArr => {
      this.todoUserArr = todoAndUserArr
    })

  }

}
