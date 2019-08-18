import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { NoteService } from 'src/app/note.service';
import { Note } from 'src/app/models/note.model';

@Component({
  selector: 'app-edit-note',
  templateUrl: './edit-note.component.html',
  styleUrls: ['./edit-note.component.scss']
})
export class EditNoteComponent implements OnInit {

  note: Note = { "id" : '', 'title': '', 'text': '', 'color': '', 'column': 0, 'created_date': '' , 'item_type': 'note' };

  constructor(private noteService: NoteService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.noteService.getNote(params.noteId).subscribe((note: Note) => {
          this.note = note;
        })
      }
    )
  }

  setColorString(color: string): void {
    this.note.color = color;
  }

  updateNote(title: string, text: string) {
    this.noteService.updateNote(this.note.id, this.note.title, this.note.text, this.note.color).subscribe((res: any) => {
      
    })
  }

}
