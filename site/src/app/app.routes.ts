import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Situacao } from './pages/situacao/situacao';
import { Solucao } from './pages/solucao/solucao';
import { Curiosidades } from './pages/curiosidades/curiosidades';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'situacao', component: Situacao },
  { path: 'solucao', component: Solucao },
  { path: 'curiosidades', component: Curiosidades }
];