import { Component, OnInit } from '@angular/core';
import { Note } from './note.model';
import { NotesService } from './notes.service';



@Component({
  selector: 'app-notes',
  templateUrl: './notes.page.html',
  styleUrls: ['./notes.page.scss'],
})
export class NotesPage implements OnInit {

  notes: Note[];

  constructor(private notesService: NotesService) { }

  ngOnInit() {
    this.notes = this.notesService.getAllNotes();
  }

}
