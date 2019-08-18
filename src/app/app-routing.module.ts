import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { EditNoteComponent } from './pages/edit-note/edit-note.component';
import { NewNoteComponent } from './pages/new-note/new-note.component';
import { NewListComponent } from './pages/new-list/new-list.component';
import { EditListComponent } from './pages/edit-list/edit-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  { path: 'dashboard', component: DashboardComponent},
  { path: 'new-note', component: NewNoteComponent },
  { path: 'edit-note/:noteId', component: EditNoteComponent },
  { path: 'new-list', component: NewListComponent },
  { path: 'edit-list/:listId', component: EditListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
