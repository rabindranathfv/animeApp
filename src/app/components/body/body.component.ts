import { Component, OnInit } from '@angular/core';

// services
import { AnimeService } from '../../services/anime.service';
@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  constructor( public _animeService: AnimeService) { }

  ngOnInit() {
  }

}
