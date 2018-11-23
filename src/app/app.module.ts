import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BodyComponent,
    CarrouselComponent,
    AnimelistComponent,
    AnimetopComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    AnimeService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
