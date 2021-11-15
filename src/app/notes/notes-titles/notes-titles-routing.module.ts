import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotesTitlesPage } from './notes-titles.page';

const routes: Routes = [
  {
    path: '',
    component: NotesTitlesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NotesTitlesPageRoutingModule {}
