import { Component } from '@angular/core';
import { UsersService } from '../../users.service';
import { TodoService } from '../../todo.service';
import { iSingleObject } from '../../Models/i-single-object';

@Component({
  selector: 'app-to-do-done',
  templateUrl: './to-do-done.component.html',
  styleUrl: './to-do-done.component.scss'
})
export class ToDoDoneComponent {

  toDoDoneUserArr:iSingleObject[] = []

  constructor(private todoSvc:TodoService, private userSvc:UsersService){}

  ngOnInit(){
    this.todoSvc.$toDoAndUser.subscribe(todoAndUserArr => {
      const toDoCompleted = todoAndUserArr.filter(oggetti => oggetti.completed)
      console.log(toDoCompleted);

      this.toDoDoneUserArr = toDoCompleted

    })

  }
}
