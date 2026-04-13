import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Header } from './layout/header/header';
import { Footer } from './layout/footer/footer';
import { Home } from './pages/home/home';
import { Curiosidades  } from './pages/curiosidades/curiosidades';
import { Situacao } from './pages/situacao/situacao';
import { Desafio } from './pages/desafio/desafio';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, Header, Footer, Home, Curiosidades, Situacao, Desafio],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('trabalho');
}
