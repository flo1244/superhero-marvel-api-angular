import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AllCharactersComponent } from './all-characters/all-characters/all-characters.component';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ComicsComponent } from './comics/comics.component';
import { SeriesComponent } from './series/series.component';

import { ModalModule } from 'ngx-bootstrap/modal';


@NgModule({
  declarations: [
    AppComponent,
    AllCharactersComponent,
    ComicsComponent,
    SeriesComponent,
       
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ModalModule.forRoot()
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
