import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// routes
import { AppRoutingModule } from './app-routing.module';

// services
import { AnimeService } from './services/anime.service';
import { AuthService } from './services/auth.service';
import { AuthGuardService } from './services/auth-guard.service'
// components
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BodyComponent } from './components/body/body.component';
import { AnimelistComponent } from './components/animelist/animelist.component';
import { AnimetopComponent } from './components/animetop/animetop.component';
import { AnimeDetailComponent } from './components/anime-detail/anime-detail.component';
import { SearchAnimeComponent } from './components/search-anime/search-anime.component';
import { AnimeCardComponent } from './components/anime-card/anime-card.component';
import { ProfileComponent } from './components/profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BodyComponent,
    AnimelistComponent,
    AnimetopComponent,
    AnimeDetailComponent,
    SearchAnimeComponent,
    AnimeCardComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    AnimeService,
    AuthService,
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
