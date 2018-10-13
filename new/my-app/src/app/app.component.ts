import { Component, OnInit } from '@angular/core';
import { TodoService } from './services/todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  todos: any;

  constructor(public todoService: TodoService) {}
  ngOnInit() {
    this.getTodoList();
  }

  getTodoList() {
    this.todoService.todoList().subscribe((todos) => {
      this.todos = todos;
    });
  }

  deleteClick(id: number) {
    const index = this.todos.indexOf(id);
    this.todos.splice( id, 1 );
    // this.todos = this.todos.splice(1 , 1);
  }
}
