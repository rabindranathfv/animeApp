import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// components
import { BodyComponent } from './components/body/body.component';
import { AnimelistComponent } from './components/animelist/animelist.component';
import { AnimetopComponent } from './components/animetop/animetop.component';
import { AnimeDetailComponent } from './components/anime-detail/anime-detail.component';


const routes: Routes = [
  { path: 'home', component: BodyComponent},
  { path: 'anime', component: AnimelistComponent },
  { path: 'anime-top', component: AnimetopComponent },
  { path: 'anime-detail/:id', component: AnimeDetailComponent },
  //{ path: 'search/:searchTerm', component: AnimeSearchComponent },
  // ruta por defecto sino cae en las anteriormente declaras
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
