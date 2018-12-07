import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// services
import { AnimeService } from '../../services/anime.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  anime: any = [];
  constructor( public _animeService: AnimeService,
               private auth: AuthService,
               private router: Router
    ) {
      auth.handleAuthentication();
     }

  ngOnInit() {
  }

  login() {
    this.auth.login();
  }

  logout() {
    this.auth.logout();
  }


  findAnime( searchTerm: string) {
    // this.anime = this._animeService.findAnimeByName(searchTerm);
    console.log(`el termino es ${searchTerm}`);
    if ( searchTerm.length > 0 ) {
      this.router.navigate( ['/search', searchTerm] );
    }
  }

}
