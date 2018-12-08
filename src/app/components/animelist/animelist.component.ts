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

  animelist: any;
  constructor( public _animeService: AnimeService,
               private routes: Router ) { }

  ngOnInit() {
    // this.animelist = this._animeService.getAnimes();
    //     .subscribe( (resp: any) => {
    //       console.log(`se esta ejecutando el subscribe`);
    //       console.log(resp);
    //     }, (err) => {
    //       console.log(err);
    //     });
    // console.log(this.animelist);

  }

  getId( id: number) {
    this.routes.navigate( ['/anime-detail', id]);
  }
}
