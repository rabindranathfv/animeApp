import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

// services 
import { AnimeService } from '../../services/anime.service';
@Component({
  selector: 'app-search-anime',
  templateUrl: './search-anime.component.html',
  styleUrls: ['./search-anime.component.css']
})
export class SearchAnimeComponent implements OnInit {

  animeList: any = [];
  searchTerm: string;

  constructor( public _animeService: AnimeService,
               private activatedRoute: ActivatedRoute,
               private routes: Router
    ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      this.searchTerm = params['searchTerm'];
      this.animeList = this._animeService.findAnimeByName(params['searchTerm']);
      console.log(this.animeList);
    });
  }

  getId( id: number) {
    console.log(`usando el metodo getId en animelist component`);
    this.routes.navigate( ['/anime-detail', id]);
  }

}
