import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

// routes
import { AppRoutingModule } from './app-routing.module';

// services
import { AnimeService } from './services/anime.service';

// components
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BodyComponent } from './components/body/body.component';
import { CarrouselComponent } from './components/carrousel/carrousel.component';
import { AnimelistComponent } from './components/animelist/animelist.component';
import { AnimetopComponent } from './components/animetop/animetop.component';
import { AnimeDetailComponent } from './components/anime-detail/anime-detail.component';
import { TitlePageComponent } from './components/title-page/title-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BodyComponent,
    CarrouselComponent,
    AnimelistComponent,
    AnimetopComponent,
    AnimeDetailComponent,
    TitlePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule
  ],
  providers: [
    AnimeService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
