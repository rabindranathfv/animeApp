import { Component, OnInit } from '@angular/core';

// services
import { AnimeService } from '../../services/anime.service'

@Component({
  selector: 'app-animelist',
  templateUrl: './animelist.component.html',
  styleUrls: ['./animelist.component.css']
})
export class AnimelistComponent implements OnInit {

  constructor( public _animeService:AnimeService ) { }

  ngOnInit() {
  }

}
