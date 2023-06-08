import { Component ,EventEmitter,Output,Input} from '@angular/core';
import { Todo } from "../../Todo";

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent {
title : string;
desc : string;

@Output() todoAdd : EventEmitter<Todo> = new EventEmitter();
constructor(){
  this.title = '';
  this.desc ='';
}

onSubmit(){
const todo = {
  sno : 8,
  title: this.title,
  desc:this.desc,
  active:true
}
console.log("From on Submit",todo)

this.todoAdd.emit(todo);

this.title = '',
this.desc = ''
}
}
