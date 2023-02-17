import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavSectionComponent } from './nav-section/nav-section.component';
import { ProjectsSectionComponent } from './projects-section/projects-section.component';

@NgModule({
  declarations: [
    AppComponent,
    NavSectionComponent,
    ProjectsSectionComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
