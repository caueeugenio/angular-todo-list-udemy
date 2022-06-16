import { Component, DoCheck } from '@angular/core';
import { TaskList } from '../../model/task-list';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements DoCheck {
  taskList: Array<TaskList> = JSON.parse(localStorage.getItem('list') || '[]');
  constructor() {}
  ngDoCheck(): void {
    this.setLocaLStorage();
  }
  public deleteItemTaskList(event: number) {
    this.taskList.splice(event, 1);
  }
  public deleteAllTaskList() {
    const confirm = window.confirm('Você deseja realmente deletar tudo?');
    if (confirm) {
      this.taskList = [];
    }
  }
  public setEmitter(event: string) {
    this.taskList.push({ task: event, checked: false });
  }
  public validationInput(event: string, index: number) {
    if (!event.length) {
      const confirm = window.confirm(
        'Você tirou o nome da tarefa, deseja deleta-la ?'
      );
      if (confirm) {
        this.deleteItemTaskList(index);
      }
    }
  }

  public setLocaLStorage() {
    if (this.taskList) {
      this.taskList.sort(
        (first, last) => Number(first.checked) - Number(last.checked)
      );
      localStorage.setItem('list', JSON.stringify(this.taskList));
    }
  }
}
