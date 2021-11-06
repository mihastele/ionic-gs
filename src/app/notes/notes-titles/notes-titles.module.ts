import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NotesTitlesPageRoutingModule } from './notes-titles-routing.module';

import { NotesTitlesPage } from './notes-titles.page';
import { MainOptionsComponent } from 'src/app/main-options/main-options.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NotesTitlesPageRoutingModule,
  ],
  declarations: [NotesTitlesPage]
})
export class NotesTitlesPageModule {}
