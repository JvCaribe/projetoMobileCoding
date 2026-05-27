import { Component, OnInit } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonItemDivider, IonLabel, IonIcon } from '@ionic/angular/standalone';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { FilmesService } from '../services/filmes.service';
import { ClassificacaoPipe } from '../pipes/classificacao-pipe';
import { CorNotaDiretiva } from './cor-nota';
import { CorClassificacaoDiretiva } from './cor-classificacao';

@Component({
  selector: 'app-infos',
  templateUrl: './infos.page.html',
  styleUrls: ['./infos.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonLabel, RouterLink, DatePipe, ClassificacaoPipe, CorNotaDiretiva, CorClassificacaoDiretiva]
})
export class InfosPage implements OnInit {

  constructor(
    private filmesService: FilmesService,
    private route: ActivatedRoute

  ) { }

  tituloPagina: string = '';
  poster: string = '';
  title: string = '';
  genero: string = '';
  anoLnc: string = '';
  tipo: string = '';
  rottenRating: string = '';
  imdbRating: string = '';
  metascoreRating: string = '';
  rated: string = '';
  direcao: string = '';
  elenco: string = '';
  premios: string = '';
  duracao: string = '';
  linkImdb: string = '';
  plot: string = '';
  temporadas: string = '';
  dataReq: Date = new Date();

  ngOnInit() {
    this.route.params.subscribe(params => {

      const id = params['id'];

      console.log('ID RECEBIDO:', id);

      if (id) {
        this.carregarFilme(id);
      }

    });

  }

  carregarFilme(id: string) {
    this.filmesService.getFilmesById(id)
      .subscribe({
        next: (dados) => {
          console.log(dados);
          this.carregarDados(dados);
        },
        error: (erro) => console.log(erro)
      });
  }

  carregarDados(dados: any) {
    this.tituloPagina = dados.Title;
    this.poster = dados.Poster;
    if (this.poster === 'N/A') {
      this.poster = 'assets/icon/404nf.png';
    }
    this.title = dados.Title;
    this.genero = dados.Genre || 'N/A';
    this.anoLnc = dados.Year || 'N/A';
    this.rottenRating = dados.Ratings?.[1]?.Value || 'N/A';
    this.imdbRating = dados.imdbRating || 'N/A';
    this.metascoreRating = dados.Metascore || 'N/A';
    this.rated = dados.Rated || 'N/A';
    this.direcao = dados.Director || 'N/A';
    this.elenco = dados.Actors || 'N/A';
    this.premios = dados.Awards || 'N/A';
    this.linkImdb = `https://www.imdb.com/title/${dados.imdbID}/`;
    this.plot = dados.Plot || 'N/A';

    if (dados.Type === 'movie') {
      this.tipo = 'Filme';
    } else if (dados.Type === 'series') {
      this.tipo = 'Série';
    } else {
      this.tipo = dados.Type || 'N/A';
    }
    this
    

    if (dados.Type === 'series') {
      this.duracao = `${dados.Runtime} por episódio, em média`
    } else {
      this.duracao = dados.Runtime || 'N/A';
    }


    if (this.direcao === 'N/A' && dados.Type === 'series') {
      this.direcao = ` Temporadas: ${dados.totalSeasons}`;
    }
    else {
      this.direcao = ` Diretor(a): ${dados.Director}`
    }

  }

}