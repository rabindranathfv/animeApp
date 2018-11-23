import { Component, OnInit } from '@angular/core';

// services
import { AnimeService } from '../../services/anime.service';

@Component({
  selector: 'app-carrousel',
  templateUrl: './carrousel.component.html',
  styleUrls: ['./carrousel.component.css']
})
export class CarrouselComponent implements OnInit {

  constructor( public _animeService: AnimeService) { }

  ngOnInit() {
  }

}
