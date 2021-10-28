import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'notes',
    pathMatch: 'full'
  },
  {path: 'notes',
    children: [
      {
        path: '',
        loadChildren: () => import('./notes/notes.module').then(m => m.NotesPageModule)
      },
      {
        path: ':noteId',
        loadChildren: () => import('./notes/note-detail/note-detail.module').then( m => m.NoteDetailPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
