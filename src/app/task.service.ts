import { Injectable } from '@angular/core';
import { WebRequestService } from './web-request.service';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private webReqService: WebRequestService) { }

  createTask(taskListId: string, text: string, sno: number) {
    return this.webReqService.post(`task-groups/${taskListId}/tasks/`, {'text': text, 'sno': sno, 'task_group': taskListId});
  }  
  
  updateTask(taskListId: string, taskId: string, text: string, sno: number) {
    return this.webReqService.patch(`task-groups/${taskListId}/tasks/${taskId}/`, { 'text': text, 'sno': sno });
  }

  deleteTask(taskListId: string, taskId: string) {
    return this.webReqService.delete(`task-groups/${taskListId}/tasks/${taskId}/`);
  }

}
