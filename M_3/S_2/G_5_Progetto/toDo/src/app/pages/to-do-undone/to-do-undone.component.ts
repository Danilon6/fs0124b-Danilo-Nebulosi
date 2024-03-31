import { Component } from '@angular/core';
import { iSingleObject } from '../../Models/i-single-object';
import { TodoService } from '../../todo.service';
import { UsersService } from '../../users.service';

@Component({
  selector: 'app-to-do-undone',
  templateUrl: './to-do-undone.component.html',
  styleUrl: './to-do-undone.component.scss'
})
export class ToDoUndoneComponent {

  toDoUnDoneUserArr: iSingleObject[] = []

  constructor(private todoSvc: TodoService, private userSvc: UsersService) { }

  ngOnInit() {
    this.todoSvc.$toDoAndUser.subscribe(todoAndUserArr => {
      const toDoCompleted = todoAndUserArr.filter(oggetti => !oggetti.completed)
      this.toDoUnDoneUserArr = toDoCompleted
    })
  }
}
