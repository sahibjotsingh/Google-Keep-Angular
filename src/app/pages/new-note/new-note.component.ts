import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/note.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Note } from 'src/app/models/note.model';

@Component({
  selector: 'app-new-note',
  templateUrl: './new-note.component.html',
  styleUrls: ['./new-note.component.scss']
})
export class NewNoteComponent implements OnInit {

  title: string = '';
  text: string = '';
  color: string = '#ffffff';
  column: string = '1';

  constructor(private noteService: NoteService, private route: ActivatedRoute, private router: Router) { }

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

  createNote() {
    this.noteService.createNode(this.title, this.text, this.color, this.column).subscribe(() => {
      this.router.navigate(['/dashboard']);
    })
  }

}
