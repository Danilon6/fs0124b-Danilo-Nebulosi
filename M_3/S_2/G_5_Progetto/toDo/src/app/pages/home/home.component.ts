import { UsersService } from './../../users.service';
import { Component } from '@angular/core';
import { TodoService } from '../../todo.service';
import { iSingleObject } from '../../Models/i-single-object';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  value:string = ""


  todoUserArr:iSingleObject[] = []

  constructor(private todoSvc:TodoService, private userSvc:UsersService){}

  ngOnInit(){
    this.todoSvc.$toDoAndUser.subscribe(todoAndUserArr => {
      this.todoUserArr = todoAndUserArr
      console.log(this.todoUserArr);

    })
  }

  filter(value:string){
    const filteredArr = this.todoSvc.filterByName(this.todoUserArr, value)
    return filteredArr
  }

}
