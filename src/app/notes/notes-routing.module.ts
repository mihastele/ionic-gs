import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotesPage } from './notes.page';

const routes: Routes = [
  {
    path: '',
    component: NotesPage
  },
  {
    path: 'notes',
    children: [
      {
        path: '',
        loadChildren: () => import('./notes.module').then(m => m.NotesPageModule)
      },
      {
        path: ':noteId',
        loadChildren: () => import('./note-detail/note-detail.module').then( m => m.NoteDetailPageModule)
      }
    ]

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NotesPageRoutingModule {}
