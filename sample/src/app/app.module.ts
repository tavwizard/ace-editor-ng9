import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AceEditorModule } from 'ngx-ace-editor-wrapper';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AceEditorModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
