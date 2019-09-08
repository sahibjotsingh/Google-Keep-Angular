import { Injectable } from '@angular/core';
import { Combined } from './models/combined.model';
import { Note } from './models/note.model';
import { TaskList } from './models/task-list.model';

@Injectable({
  providedIn: 'root'
})
export class MergeListsService {

  constructor() { }

  merge(combined: any): Promise<any> {

    let notes: any[];
    let i: number = 0;
    let j: number = 0;
    let N: number = 0;
    let M: number = 0;
    let items: any[] = [];
    let task_lists: any[];
    let iterator: number = 1;
    let noc: number = 5;

    return new Promise(resolve => {
      notes = combined[0];
      task_lists = combined[1];
      N = notes.length;
      M = task_lists.length;

      while (i < N && j < M) {
        if (notes[i].created_date <= task_lists[j].created_date) {
          notes[i].column = iterator % noc;
          items.push(notes[i]);
          i = i + 1;
          iterator = iterator + 1;
        }
        else {
          task_lists[j].column = iterator % noc;
          items.push(task_lists[j]);
          j = j + 1;
          iterator = iterator + 1;
        }
      }

      while (i < N) {
        notes[i].column = iterator % noc;
        items.push(notes[i]);
        i = i + 1;
        iterator = iterator + 1;
      }

      while (j < M) {
        task_lists[j].column = iterator % noc;
        items.push(task_lists[j]);
        j = j + 1;
        iterator = iterator + 1;
      }

      resolve(items);
    });

  }
}
