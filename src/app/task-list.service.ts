import { Injectable } from '@angular/core';
import { Task } from './models/task.model';
import { WebRequestService } from './web-request.service';

@Injectable({
  providedIn: 'root'
})
export class TaskListService {

  constructor(private webReqService: WebRequestService) { }

  getTaskList(taskListId: string) {
    return this.webReqService.get(`task-group-tasks/${taskListId}`);
  }

  createTaskList(title: string, color: string, column: number) {
    return this.webReqService.post(`task-groups`, { 'title': title, 'color': color, 'column': column });
  }

  updateTaskList(taskListId: string, title: string, color: string, column: number) {
    return this.webReqService.patch(`task-groups/${taskListId}`, { 'title': title, 'color': color, 'column': column });
  }

  deleteTaskList(taskListId: string) {
    return this.webReqService.delete(`task-groups/${taskListId}`);
  }

  updateTaskListColor(taskListId: string, color: string) {
    return this.webReqService.patch(`task-groups/${taskListId}`, { "color": color});
  }

}
