import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// services
import { AuthGuardService } from '../app/services/auth-guard.service';

// components
import { BodyComponent } from './components/body/body.component';
import { AnimelistComponent } from './components/animelist/animelist.component';
import { AnimetopComponent } from './components/animetop/animetop.component';
import { AnimeDetailComponent } from './components/anime-detail/anime-detail.component';
import { SearchAnimeComponent } from './components/search-anime/search-anime.component';
import { ProfileComponent } from './components/profile/profile.component';


const routes: Routes = [
  { path: 'home', component: BodyComponent},
  { path: 'anime', component: AnimelistComponent },
  {
    path: 'anime-top',
    component: AnimetopComponent,
    // use N-conditions and for enter all must be true
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'profile',
    component: ProfileComponent,
    // use N-conditions and for enter all must be true
    canActivate: [ AuthGuardService ]
  },
  { path: 'anime-detail/:id', component: AnimeDetailComponent },
  { path: 'search/:searchTerm', component: SearchAnimeComponent },
  // ruta por defecto sino cae en las anteriormente declaras
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
