import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { AnimeService } from '../../services/anime.service';

@Component({
  selector: 'app-anime-detail',
  templateUrl: './anime-detail.component.html',
  styleUrls: ['./anime-detail.component.css']
})
export class AnimeDetailComponent implements OnInit {

  anime: any = {};

  constructor( public _animeService: AnimeService,
               private activatedRoute: ActivatedRoute
    ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe( (params) => {
      console.log(`el id tomando de la URL es ${params['id']}`);
      // return this.anime = this._animeService.getAnime(params['id']);
    });
  }
}
