import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AnimeService } from '../../services/anime.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  anime: any = [];
  constructor( public _animeService: AnimeService,
               private router: Router
    ) { }

  ngOnInit() {
  }


  findAnime( searchTerm: string) {
    // this.anime = this._animeService.findAnimeByName(searchTerm);
    if ( searchTe  rm.length > 0 ) {
      this.router.navigate( ['/search', searchTerm] );
    }
  }

}
