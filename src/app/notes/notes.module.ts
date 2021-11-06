import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NotesPageRoutingModule } from './notes-routing.module';

import { NotesPage } from './notes.page';
import { NoteItemComponent } from './note-item/note-item.component';
import { MainOptionsComponent } from '../main-options/main-options.component';
import { NotesMenuComponent } from './notes-menu/notes-menu.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NotesPageRoutingModule,
  ],
  declarations: [NotesPage, NoteItemComponent, MainOptionsComponent, NotesMenuComponent]
})
export class NotesPageModule {}
