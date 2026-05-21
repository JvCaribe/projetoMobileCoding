import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonItemDivider, IonLabel, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonSearchbar, IonButton, IonIcon } from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';
import { addIcons } from 'ionicons';
import { logoIonic } from 'ionicons/icons';

@Component({
  selector: 'app-busca',
  templateUrl: './busca.page.html',
  styleUrls: ['./busca.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonItemDivider, IonLabel, RouterLink, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonCardSubtitle, IonSearchbar, IonButton, IonIcon]
})
export class BuscaPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}


import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonItemDivider, IonLabel, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonSearchbar, IonButton } from '@ionic/angular/standalone';
import { FilmesService } from '../services/filmes';
import { OnInit } from '@angular/core';
import { environment } from '../../environments/environment';
import { IonIcon } from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';
import { IonSpinner } from '@ionic/angular/standalone';
@Component({
  selector: 'app-infos',
  templateUrl: './infos.page.html',
  styleUrls: ['./infos.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonItemDivider, IonLabel, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonCardSubtitle, IonSearchbar, IonButton, IonIcon, RouterLink, IonSpinner],
})
export class InfosPage implements OnInit {

  constructor(private filmesService: FilmesService) { }

  filmes: any[] = [];
  nomeFilme: string = '';

  ngOnInit(): void {
    this.buscarFilme();}

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

}