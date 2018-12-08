import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-anime-card',
  templateUrl: './anime-card.component.html',
  styleUrls: ['./anime-card.component.css']
})
export class AnimeCardComponent implements OnInit {
  // Recibir data desde afuera
  @Input() anime: any = {};
  @Input() id: number;
  @Input() type: number;

  constructor( private router: Router) { }

  ngOnInit() {
  }

  getId( id: number) {
    this.router.navigate( ['/anime-detail', id]);
  }

}
