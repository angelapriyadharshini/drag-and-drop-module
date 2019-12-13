import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { DragAndDropComponent } from './components/drag-and-drop/drag-and-drop.component';
import { DataService } from './services/data-service';
import { ItemBoxService } from './services/itembox-service';
import { ItemboxComponent } from './components/itembox/itembox.component';

@NgModule({
  declarations: [
    AppComponent,
    DragAndDropComponent,
    ItemboxComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [DataService, ItemBoxService],
  bootstrap: [AppComponent]
})
export class AppModule { }
