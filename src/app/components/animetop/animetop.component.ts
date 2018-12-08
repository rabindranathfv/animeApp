import { Component, OnInit, Input } from '@angular/core';
import { AnimeService } from '../../services/anime.service';

@Component({
  selector: 'app-animetop',
  templateUrl: './animetop.component.html',
  styleUrls: ['./animetop.component.css']
})
export class AnimetopComponent implements OnInit {

  characterlist: any = [];

  constructor( public _animeService: AnimeService) { }

  ngOnInit() {
    this._animeService.getAnimesTop()
         .subscribe( (resp: any) => {
           console.log(resp);
           this.characterlist = resp;
         }, (err) => {
           console.log(err);
         });
  console.log(this.characterlist);
  }

}
