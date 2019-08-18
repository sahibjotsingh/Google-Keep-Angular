import { Injectable } from '@angular/core';
import { WebRequestService } from './web-request.service';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  constructor(private webReqService: WebRequestService) { }

  getNotes() {
    return this.webReqService.get('notes');
  }

  getNote(noteId: string) {
    return this.webReqService.get(`notes/${noteId}`);
  }

  createNode(title: string, text: string, color: string, column: string) {
    return this.webReqService.post('notes', { "title": title, "text": text, "color": color , "column": column });
  }

  updateNote(noteId: string, title: string, text: string, color: string) {
    return this.webReqService.patch(`notes/${noteId}`, { "title": title, "text": text, "color": color});
  }

  deleteNote(noteId: string) {
    return this.webReqService.delete(`notes/${noteId}`);
  }

  updateNoteColor(noteId: string, color: string) {
    return this.webReqService.patch(`notes/${noteId}`, { "color": color});
  }
}
