import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-curiosidades',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './curiosidades.html',
  styleUrls: ['./curiosidades.css'],
})
export class Curiosidades {

  secoes = [
    {
      titulo: 'Sobre o Projeto',
      conteudo: 'Este site foi desenvolvido com o objetivo de apresentar notícias atualizadas sobre tecnologia, utilizando uma interface moderna, responsiva e de fácil navegação.'
    },
    {
      titulo: 'Funcionalidades',
      conteudo: 'O sistema exibe notícias em formato de cards contendo imagem, título e descrição. O layout é responsivo e se adapta a diferentes tamanhos de tela.'
    },
    {
      titulo: 'Tecnologias Utilizadas',
      conteudo: 'O projeto foi desenvolvido utilizando Angular, HTML, CSS/Tailwind e TypeScript.'
    },
    {
      titulo: 'Estrutura do Projeto',
      conteudo: 'A aplicação é organizada em componentes como Home, Documentação, Tutoriais e Sobre, utilizando Angular Router para navegação.'
    },
    {
      titulo: 'Objetivo',
      conteudo: 'Simular um portal de notícias moderno com foco em tecnologia.'
    }
  ];

  recursos = [
    {
      nome: 'Documentação Oficial do Angular',
      descricao: 'Acesse a documentação completa do Angular, com guias, exemplos e boas práticas.',
      link: 'https://angular.dev'
    },
    {
      nome: 'Documentação do Tailwind CSS',
      descricao: 'Guia oficial do Tailwind CSS para estilização moderna e responsiva.',
      link: 'https://tailwindcss.com/docs'
    }
  ];

}