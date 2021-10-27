import { Component, OnInit } from '@angular/core';


import { Note } from './note.model';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.page.html',
  styleUrls: ['./notes.page.scss'],
})
export class NotesPage implements OnInit {

  notes: Note[] = [{
    id: 'aw13w',
    title: 'Aaaaa',
    body: '1123k1č4mjklmlkmalmascv.das md',
    attachmentUrls: []
  },

  {
    id: 'a22',
    title: 'Body bvuilding',
    body: `1123k1č4mjklmlkmalmascv.da
    asad
    asdasd
    asd
    dass md`,
    attachmentUrls: ['./seee']
  },

  {
    id: 'aw1332w',
    title: 'BOSMVB',
    body: '1123k1č4mjklmlkmalmascasfafsasfavasfasfasff',
    attachmentUrls: []
  },
  {
    id: 'aw1323w',
    title: 'Čokolino',
    body: '1123k1č4mjkasfafasfsafasfasas md',
    attachmentUrls: []
  }

];

  constructor() { }

  ngOnInit() {
  }

}
