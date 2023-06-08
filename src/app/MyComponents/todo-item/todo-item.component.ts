import { Component, Input,Output,EventEmitter } from '@angular/core';
import {Todo} from '../../Todo'

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent {
  @Input() todo!: Todo;
  @Output() todoDelete : EventEmitter<Todo> = new EventEmitter();
  @Output() todoCheckbox : EventEmitter<Todo> = new EventEmitter();
  onClick(todo : Todo){
    this.todoDelete.emit(todo);
    console.log("OnClick has been triggered")
  }

  onChechkBoxClick(todo:Todo){
    this.todoCheckbox.emit(todo);
    console.log("You have checked the checkbox")
  }
}
