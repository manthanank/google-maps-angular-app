import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PlaceAutocompleteComponent } from './components/place-autocomplete/place-autocomplete.component';
import { PlaceCardComponent } from './components/place-card/place-card.component';
import { MapDisplayComponent } from './components/map-display/map-display.component';
import { MatToolbarModule } from '@angular/material/toolbar';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    PlaceAutocompleteComponent,
    PlaceCardComponent,
    MapDisplayComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
