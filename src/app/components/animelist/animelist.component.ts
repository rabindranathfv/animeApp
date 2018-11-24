import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// services
import { AnimeService } from '../../services/anime.service';

@Component({
  selector: 'app-animelist',
  templateUrl: './animelist.component.html',
  styleUrls: ['./animelist.component.css']
})
export class AnimelistComponent implements OnInit {

  animelist: any[];
  constructor( public _animeService: AnimeService,
               private routes: Router ) { }

  ngOnInit() {
    this.animelist = this._animeService.getAnimes();
    console.log(this.animelist);
  }

  getId( id: number) {
    console.log(`usando el metodo getId en animelist component`);
    this.routes.navigate( ['/anime-detail', id]);
  }

}
