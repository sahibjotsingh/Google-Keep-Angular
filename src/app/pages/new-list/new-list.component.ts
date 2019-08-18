import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { TaskList } from 'src/app/models/task-list.model';
import { Task } from 'src/app/models/task.model';
import { TaskListService } from 'src/app/task-list.service';
import { TaskService } from 'src/app/task.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { forkJoin, Observable } from 'rxjs';

@Component({
  selector: 'app-new-list',
  templateUrl: './new-list.component.html',
  styleUrls: ['./new-list.component.scss']
})
export class NewListComponent implements OnInit {

  title: string = '';
  color: string = '#ffffff';
  column: string = '1';
  taskListId: string;
  taskList: TaskList = { "id": '', 'title': '', 'color': '', 'column': 0, 'tasks': [], 'created_date': '', 'item_type': 'task_list' };

  constructor(private taskService: TaskService, private taskListService: TaskListService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.column = this.getRandomInt(1,4);
  }

  getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  setColorString(color: string) {
    this.color = color;
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.taskList.tasks, event.previousIndex, event.currentIndex);
  }

  createTask() {
    this.taskList.tasks.push({ 'id': '-1', 'text': ' ', 'sno': -1, 'task_group': this.taskList.id });
  }

  deleteTask(task: Task) {
    let index = this.taskList.tasks.indexOf(task);
    if (index > -1) {
      this.taskList.tasks.splice(index, 1);
    };
  }

  createTaskList() {
    this.taskListService.createTaskList(this.taskList.title, this.color, this.taskList.column).subscribe((res => {
     
      let taskList: any = res;

      let observables: Observable<any>[] = [];
      for (let i = 0; i < this.taskList.tasks.length; i = i + 1) {

        if (this.taskList.tasks[i].text !== " ") {
          if (this.taskList.tasks[i].id === '-1') {
            observables.push(this.taskService.createTask(taskList.id, this.taskList.tasks[i].text, i));
          }
          else {
            observables.push(this.taskService.updateTask(taskList.id, this.taskList.tasks[i].id, this.taskList.tasks[i].text, i));
          }
        }

      }

      forkJoin(observables)
        .subscribe(dataArray => {
          // All observables in `observables` array have resolved and `dataArray` is an array of result of each observable
          this.router.navigate(['/dashboard']);
        });
        
    }));

  }


}
