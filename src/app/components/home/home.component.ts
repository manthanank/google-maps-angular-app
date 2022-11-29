import { Component } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { PlaceAutocompleteComponent, PlaceSearchResult } from '../place-autocomplete/place-autocomplete.component';
import { PlaceCardComponent } from '../place-card/place-card.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MapDisplayComponent } from '../map-display/map-display.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, MatToolbarModule,
    PlaceAutocompleteComponent,
    PlaceCardComponent,
    MapDisplayComponent,
    NgIf,],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

}
