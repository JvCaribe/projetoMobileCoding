import { Component } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonItemDivider, IonLabel, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonSearchbar, IonButton, IonSkeletonText } from '@ionic/angular/standalone';
import { FilmesService } from '../services/filmes.service';
import { OnInit } from '@angular/core';
import { environment } from '../../environments/environment';
import { IonIcon } from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';
import { IonSpinner } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { logoIonic } from 'ionicons/icons';

@Component({
  selector: 'app-busca',
  templateUrl: './busca.page.html',
  styleUrls: ['./busca.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonItemDivider, IonLabel, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonCardSubtitle, IonSearchbar, IonButton, IonIcon, RouterLink, IonSpinner, IonSkeletonText],
})
export class BuscaPage implements OnInit {
  // SABER SE POSSO CRIAR O PRIVATE COM O NOME Q EU QUISER???
  constructor(private filmesService: FilmesService) { }

  filmes: any[] = [];
  nomeFilme: string = '';

  ngOnInit(): void {
    this.buscarFilme();
  }

  buscarFilme() {

    this.filmesService.getFilmes(this.nomeFilme)
      .subscribe({
        next: (resposta: any) => {

          if (resposta.Response === 'True') {
            this.filmes = resposta.Search;
          } else {
            this.filmes = [];
          }

        },

        error: (erro) => {
          console.error('Erro ao buscar filmes', erro);
          this.filmes = [];
        }
      });

  }

  getTipo(tipo: string): string {
    switch (tipo) {
      case 'movie':
        return 'Filme';
      case 'series':
        return 'Série';
      default:
        return tipo;
    }
  }

  getPoster(poster: string): string {
    if (poster === 'N/A') {
      return 'assets/icon/notfound.png';
    }
    return poster;
  }
}