import { Component, OnInit } from '@angular/core';

// services
import { AnimeService } from '../../services/anime.service';

@Component({
  selector: 'app-animelist',
  templateUrl: './animelist.component.html',
  styleUrls: ['./animelist.component.css']
})
export class AnimelistComponent implements OnInit {

  animelist: any[];
  constructor( public _animeService: AnimeService ) { }

  ngOnInit() {
    this.animelist = this._animeService.getAnimes();
    console.log(this.animelist);
  }

}
