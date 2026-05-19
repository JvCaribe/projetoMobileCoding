import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },  {
    path: 'infos',
    loadComponent: () => import('./infos/infos.page').then( m => m.InfosPage)
  },
  {
    path: 'busca',
    loadComponent: () => import('./busca/busca.page').then( m => m.BuscaPage)
  },

];
