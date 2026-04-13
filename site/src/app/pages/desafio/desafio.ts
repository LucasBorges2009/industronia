import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-desafio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './desafio.html',
  styleUrls: ['./desafio.css']
})
export class Desafio {

  desafio = {
    pergunta: 'Como Industronia pode lidar com a crise econômica e reduzir a dependência de exportações?',
    
    descricao: 'Industronia enfrenta uma crise econômica causada pela alta dependência do mercado externo. A falta de diversificação econômica torna o país vulnerável a variações globais, exigindo uma reestruturação estratégica para garantir estabilidade e crescimento sustentável.',

    pontos: [
      {
        titulo: 'Diversificação Econômica',
        texto: 'Investir em novos setores como tecnologia, serviços e mercado interno para reduzir a dependência industrial.'
      },
      {
        titulo: 'Fortalecimento do Mercado Interno',
        texto: 'Estimular o consumo interno através de políticas econômicas e aumento do poder de compra da população.'
      },
      {
        titulo: 'Investimento em Educação',
        texto: 'Desenvolver mão de obra qualificada para inovação e crescimento sustentável a longo prazo.'
      },
      {
        titulo: 'Inovação Tecnológica',
        texto: 'Modernizar a indústria com tecnologia avançada para aumentar competitividade global.'
      },
      {
        titulo: 'Infraestrutura Nacional',
        texto: 'Melhorar transportes e logística para fortalecer a economia interna.'
      },
      {
        titulo: 'Redução de Dependência Externa',
        texto: 'Criar políticas que incentivem produção e consumo dentro do próprio país.'
      }
    ]
  };

}