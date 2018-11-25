import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

// services
import { AnimeService } from '../../services/anime.service';
@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  animeList: any = [];

  constructor( public _animeService: AnimeService,
               private router: Router,
               private activatedRoute: ActivatedRoute
    ) {
      this.animeList = this._animeService.getAnimes();
     }

  ngOnInit() {
  }

}
