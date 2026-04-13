import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrls: ['./home.css'],
})
export class Home {
  noticias = [
    {
      titulo: 'Nova IA revoluciona o mercado',
      descricao: 'Uma nova inteligência artificial está transformando diversos setores, desde atendimento ao cliente até desenvolvimento de software. Empresas estão adotando essa tecnologia para aumentar produtividade, reduzir custos e melhorar a experiência dos usuários, marcando uma nova era na automação.',
      imagem: 'https://images.unsplash.com/photo-1677442136019-21780ecad995'
    },
    {
      titulo: 'Atualização do Angular 18',
      descricao: 'O Angular 18 chegou com melhorias significativas de performance, redução no tamanho dos bundles e novas ferramentas para desenvolvedores. A atualização também traz avanços no sistema de reatividade, tornando aplicações mais rápidas e eficientes.',
      imagem: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c'
    },
    {
      titulo: 'Tecnologia 5G cresce no Brasil',
      descricao: 'A expansão do 5G no Brasil está acelerando a conectividade e abrindo portas para novas tecnologias como cidades inteligentes, carros autônomos e internet das coisas. Grandes centros urbanos já começam a sentir os impactos dessa revolução digital.',
      imagem: 'https://images.unsplash.com/photo-1518770660439-4636190af475'
    },
    {
      titulo: 'Segurança em Dados: Tendências 2026',
      descricao: 'A cibersegurança se torna ainda mais crítica com o aumento de ataques ransomware e invasões. Empresas investem em inteligência artificial para detectar ameaças em tempo real e implementam estratégias de zero-trust para proteger seus dados.',
      imagem: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97'
    }
  ];
}