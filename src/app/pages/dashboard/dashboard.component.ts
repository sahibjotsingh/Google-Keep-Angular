import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { CombinedService } from 'src/app/combined.service';
import { TaskListService } from 'src/app/task-list.service';
import { NoteService } from 'src/app/note.service';
import { MergeListsService } from 'src/app/merge-lists.service';
import { Note } from 'src/app/models/note.model';
import { TaskList } from 'src/app/models/task-list.model';
import { Task } from 'src/app/models/task.model';
import { Combined } from 'src/app/models/combined.model';
import { empty } from 'rxjs';

@Component({
  selector: 'dashboard-view',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  columnNumber: number = 1;
  selectedId: string;
  combined: Combined;
  notes: any;
  items: any;

  constructor(private combinedService: CombinedService, private noteService: NoteService, private taskListService: TaskListService, private mergeLists: MergeListsService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.loadDashboard();
  }

  loadDashboard() {
    this.combinedService.getCombined().subscribe((combined: Combined) => {
      this.combined = combined;
      this.mergeLists.merge(this.combined).then(items => {
        this.items = items;
      })
    });
  }

  setColorString(itemId: string, itemType: string, color: string): void {

    let itemIndex = this.items.findIndex(item => (item.id == itemId && item.item_type == itemType));
    this.items[itemIndex].color = color;

    switch (itemType) {
      case 'note':
        this.noteService.updateNoteColor(itemId, color).subscribe((res: any) => {
          //do nothing
        });
        break;

      case 'task_list':
        this.taskListService.updateTaskListColor(itemId, color).subscribe((res: any) => {
          //do nothing
        });
        break;
    }

  }

  deleteItem(item) {
    switch (item.item_type) {
      case 'note':
        this.noteService.deleteNote(item.id).subscribe(() => {
          this.loadDashboard();
        });
        break;

      case 'task_list':
        this.taskListService.deleteTaskList(item.id).subscribe(() => {
          this.loadDashboard();
        });
        break;
    }
  }

}
