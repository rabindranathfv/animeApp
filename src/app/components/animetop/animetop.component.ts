import { Component, OnInit, Input } from '@angular/core';
import { AnimeService } from '../../services/anime.service';

@Component({
  selector: 'app-animetop',
  templateUrl: './animetop.component.html',
  styleUrls: ['./animetop.component.css']
})
export class AnimetopComponent implements OnInit {

  animeList: any = [];

  constructor( public _animeService: AnimeService) { }

  ngOnInit() {
    // this.animeList = this._animeService.getAnimes();
  }

}
