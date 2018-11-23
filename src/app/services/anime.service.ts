import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnimeService {

  constructor() {
    console.log(`Servicio de Anime Listo`);
   }
}
