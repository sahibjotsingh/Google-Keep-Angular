import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { EditNoteComponent } from './pages/edit-note/edit-note.component';
import { NewNoteComponent } from './pages/new-note/new-note.component';
import { FormsModule } from '@angular/forms';
import { NewListComponent } from './pages/new-list/new-list.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { EditListComponent } from './pages/edit-list/edit-list.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    EditNoteComponent,
    NewNoteComponent,
    NewListComponent,
    EditListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
