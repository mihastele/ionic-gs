import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Note } from '../note.model';
import { NotesService } from '../notes.service';

@Component({
  selector: 'app-note-detail',
  templateUrl: './note-detail.page.html',
  styleUrls: ['./note-detail.page.scss'],
})
export class NoteDetailPage implements OnInit {

  loadedNote: Note;

  constructor(private activatedRoute: ActivatedRoute,
    private notesService: NotesService, private router: Router,
    private alertCtrl: AlertController) {

  }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('noteId')) {
        //redirect
        this.router.navigate(['/recipes']);
        return;
      }
      const noteId = paramMap.get('noteId');
      this.loadedNote = this.notesService.getNote(noteId);
    });
  }

  onDeleteNote() {
    this.alertCtrl.create({
      header: 'Are you sure?', message: 'Do you really want to delete the note?',
      buttons: [{ text: ' Cancel', role: 'cancel' }, {
        text: 'Delete', handler: () => {
          this.notesService.deleteNote(this.loadedNote.id);
          this.router.navigate(['/notes']);
        }
      }]
    }).then(alrertEl => alrertEl.present());
  }

}
