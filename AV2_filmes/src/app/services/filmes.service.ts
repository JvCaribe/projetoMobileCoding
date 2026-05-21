import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})

export class FilmesService {

  constructor(private http: HttpClient) { }

  getFilmes(busca: string) {
    return this.http.get(`${environment.urlApi}?apikey=${environment.apiKey}&s=${busca}`);
  }

  getFilmesById(id: string) {
    return this.http.get(`${environment.urlApi}?apikey=${environment.apiKey}&i=${id}`)
  }
    
  }
