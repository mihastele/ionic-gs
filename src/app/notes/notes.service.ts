import { RecursiveTemplateAstVisitor } from '@angular/compiler';
import { Injectable } from '@angular/core';


import { Note } from './note.model';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  private notes: Note[] = [{
    id: 'aw12w',
    title: 'Aaaaa',
    body: '1122k1č4mjklmlkmalmascv.das md',
    attachmentUrls: []
  },

  {
    id: 'a21',
    title: 'Body bvuilding',
    body: `1122k1č4mjklmlkmalmascv.da
    asad
    asdasd
    asd
    dass md`,
    attachmentUrls: ['./seee']
  },

  {
    id: 'aw1331w',
    title: 'BOSMVB',
    body: '1122k1č4mjklmlkmalmascasfafsasfavasfasfasff',
    attachmentUrls: []
  },
  {
    id: 'aw1322w',
    title: 'Čokolino',
    body: '1122k1č4mjkasfafasfsafasfasas md',
    attachmentUrls: []
  }

];

  constructor() { }

  getAllNotes() {
    return [...this.notes];
  }

  getNote(noteId){
    return {...this.notes.find(note => note.id === noteId )};
  }

  deleteNote(noteId: string){
    this.notes = this.notes.filter(note => noteId !== note.id);
  }
}
