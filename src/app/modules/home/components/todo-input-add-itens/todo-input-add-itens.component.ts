import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TaskList } from '../../model/task-list';

@Component({
  selector: 'app-todo-input-add-itens',
  templateUrl: './todo-input-add-itens.component.html',
  styleUrls: ['./todo-input-add-itens.component.scss'],
})
export class TodoInputAddItensComponent implements OnInit {
  @Output() public sendEmitter: EventEmitter<any> = new EventEmitter();
  public newTask: string = '';
  constructor() {}

  ngOnInit(): void {}

  public sendNewTaskToList() {
    this.newTask.trim();
    if (this.newTask) {
      this.sendEmitter.emit(this.newTask);
      this.newTask = '';
    } else {
      window.alert('Você precisa digitar o nome da tarefa antes de enviar.');
    }
  }
}
